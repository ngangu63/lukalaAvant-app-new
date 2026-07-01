import { Injectable } from '@angular/core';
import { MediaFile } from './media-file';
import { lukalaMediaList } from './lukala-media';

/**
 * Provides read access to the media catalogue and resolves a media item
 * from the route id (the last segment of its `link`).
 */
@Injectable({ providedIn: 'root' })
export class MediaService {
  private readonly mediaList: readonly MediaFile[] = lukalaMediaList;

  /** All available media items. */
  getAll(): readonly MediaFile[] {
    return this.mediaList;
  }

  /** The route id for a media item (last segment of its link). */
  getId(media: MediaFile): string {
    return media.link[media.link.length - 1];
  }

  /** Find a media item by its route id, or `undefined` if none matches. */
  findById(id: string): MediaFile | undefined {
    if (!id) {
      return undefined;
    }
    return this.mediaList.find((media) => this.getId(media) === id);
  }
}
