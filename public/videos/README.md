# Property videos

This folder is intentionally empty of video files for now.

## Adding real property videos

1. Export videos as **MP4 (H.264 + AAC)** — ideally under 20 MB each, 1080p.
2. Place them here, for example:
   - `public/videos/villa-walkthrough.mp4`
   - `public/videos/pool-and-lawn.mp4`
3. Add a poster image (a still frame) to `public/images/`.
4. Open `src/data/gallery.ts` and update the two video entries:

```ts
{
  id: "video-walkthrough",
  title: "Villa walkthrough",
  category: "Property Videos",
  src: "/images/villa-exterior.jpg", // poster image
  alt: "Video walkthrough of Bajirao Villa",
  type: "video",
  videoSrc: "/videos/villa-walkthrough.mp4", // <-- add this
}
```

The gallery automatically renders a video player when `videoSrc` is set. Until
then, visitors see an honest "video coming soon" message.
