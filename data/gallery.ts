export type GalleryItem = {
  id: string;
  title: string;
  type: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-01",
    title: "Shader Breakdown",
    type: "Materials / Shaders",
    image: "/menu/gallery.jpg",
  },
  {
    id: "gallery-02",
    title: "Character Presentation",
    type: "Rigging / Model",
    image: "/menu/about.jpg",
  },
  {
    id: "gallery-03",
    title: "Environment Lookdev",
    type: "Lighting / Atmosphere",
    image: "/hero/cover.jpg",
  },
  {
    id: "gallery-04",
    title: "Gameplay Prototype",
    type: "Systems / Design",
    image: "/menu/projects.jpg",
  },
  {
    id: "gallery-05",
    title: "Skill Tree Mockup",
    type: "UI / Presentation",
    image: "/menu/skills.jpg",
  },
  {
    id: "gallery-06",
    title: "Visual Experiment",
    type: "Technical Art",
    image: "/menu/gallery.jpg",
  },
];