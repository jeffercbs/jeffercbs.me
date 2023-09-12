import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dxsnumjbv',
  },
});

export function getImage(img: string) {
  return cld.image(img).format('webp').quality('40').toURL();
}
