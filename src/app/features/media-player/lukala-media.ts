import { MediaFile } from './media-file';

/**
 * Single source of truth for the "Lukala s'amuse" media items.
 * The last segment of each `link` is used as the route id (see MediaService).
 */
export const lukalaMediaList: MediaFile[] = [
  {
    name: "L'Anniversaire de DéDé",
    link: ['/media', 'dede-anniversaire'],
    source: 'assets/mp3/DedeAniversaire2026.mp4',
    type: 'mp4',
    placeholder: 'assets/images/DedeAniversaire2026.jpg',
  },
  {
    name: 'Hommage à nos morts',
    link: ['/media', 'hommage'],
    source: 'assets/mp3/HOMMAGE_A_NOS_MORTS.mp3',
    type: 'mp3',
    placeholder: 'assets/images/CantineModified1.jpg',
  },
  {
    name: 'Lukala en vidéo',
    link: ['/media', 'lukala-video'],
    source: 'assets/mp3/LukalaVideo.mp4',
    type: 'mp4',
    placeholder: 'assets/plantation/bilanga12.jpg',
  },
  {
    name: 'Bilanga 11',
    link: ['/media', 'bilanga11'],
    source: 'assets/mp3/bilanga11.mp4',
    type: 'mp4',
    placeholder: 'assets/plantation/bilanga11.jpeg',
  },
  {
    name: 'Bilanga 12',
    link: ['/media', 'bilanga12'],
    source: 'assets/mp3/bilanga12.mp4',
    type: 'mp4',
    placeholder: 'assets/plantation/bilanga12.jpg',
  },
  {
    name: 'La bouture',
    link: ['/media', 'bouture1'],
    source: 'assets/mp3/bouture1.mp4',
    type: 'mp4',
    placeholder: 'assets/plantation/abouture1.jpeg',
  },
];
