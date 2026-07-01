import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MediaService } from './media.service';

/**
 * Reusable player for a single MP3 audio or MP4 video item.
 *
 * The item to play is resolved from the `:id` route parameter, so the very
 * same component instance is reused across routes: navigating to another media
 * simply stops the current playback, loads the new source and plays it — no
 * full page refresh.
 */
@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaPlayerComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly mediaService = inject(MediaService);

  private readonly videoRef =
    viewChild<ElementRef<HTMLVideoElement>>('videoEl');
  private readonly audioRef =
    viewChild<ElementRef<HTMLAudioElement>>('audioEl');

  /** Current route id (last segment of the media link). */
  private readonly id = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  /** The media item to render, or `undefined` when the route is invalid. */
  readonly media = computed(() => this.mediaService.findById(this.id()));

  /** True when the media source fails to load (missing / broken file). */
  readonly loadError = signal(false);

  constructor() {
    // Whenever the selected media changes, reset the error state and
    // (re)start playback on the freshly rendered <audio>/<video> element.
    effect(
      () => {
        const media = this.media();
        this.loadError.set(false);

        const element =
          this.videoRef()?.nativeElement ?? this.audioRef()?.nativeElement;

        if (media && element) {
          element.load();
          // Browsers may block autoplay; ignore the resulting rejection.
          element.play().catch(() => undefined);
        }
      },
      { allowSignalWrites: true },
    );
  }

  /** Called by the media element's `error` event. */
  onMediaError(): void {
    this.loadError.set(true);
  }
}
