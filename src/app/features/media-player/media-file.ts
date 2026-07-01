/**
 * Describes a single playable media item (MP3 audio or MP4 video)
 * used by the "Lukala s'amuse" dropdown and the MediaPlayerComponent.
 */
export interface MediaFile {
  /** Human readable title shown in the menu and above the player. */
  name: string;

  /** Angular routerLink command array, e.g. ['/media', 'barcelona']. */
  link: string[];

  /** Path to the real media file, e.g. 'assets/mp3/barcelona.mp3'. */
  source: string;

  /** Media kind, decides which player is rendered. */
  type: 'mp3' | 'mp4';

  /** Image shown above an audio player / used as a video poster. */
  placeholder: string;
}
