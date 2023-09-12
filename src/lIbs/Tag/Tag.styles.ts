interface TagStyle {
  [key: string]: string;
}

const tags: TagStyle = {
  html: 'bg-orange-100 text-orange-700',
  css: 'bg-blue-100 text-blue-700',
  javascript: 'bg-yellow-200 text-yellow-800',
  react: 'bg-cyan-100 text-cyan-600',
  design: 'bg-indigo-100 text-indigo-700',
  web: 'bg-slate-200 text-slate-700',
  productividad: 'bg-red-100 text-red-700',
  node: 'bg-lime-100 text-lime-700',
  next: 'bg-violet-100 text-violet-700',
  git: 'bg-amber-100 text-amber-700',
  seo: 'bg-rose-100 text-rose-700',
  npm: 'bg-emerald-100 text-emerald-700',
  personal: 'bg-blue-100 text-blue-700',
  neovim: 'bg-teal-100 text-teal-700',
  nestjs: 'bg-purple-100 text-purple-700',
  postgresql: 'bg-green-100 text-green-700',
  linux: 'bg-lime-100 text-lime-700',
  windows: 'bg-cyan-100 text-cyan-700',
  dotfiles: 'bg-gray-200 text-gray-700',
  api: 'bg-amber-200 text-amber-800',
  typeorm: 'bg-pink-100 text-pink-700',
  docker: 'bg-blue-100 text-blue-700',
  typescript: 'bg-blue-100 text-blue-700',
  tailwind: 'bg-cyan-100 text-cyan-700',
  supabase: 'bg-amber-100 text-amber-700',
  nextjs: 'bg-violet-100 text-violet-700',
  jwt: 'bg-rose-100 text-rose-700',
  svelte: 'bg-red-100 text-red-700',
  vitejs: 'bg-teal-100 text-teal-700',
  default: 'bg-gray-100 text-gray-700',
};

export const getTagClass = (tag: string): string => {
  return tags[tag] || tags.default;
};
