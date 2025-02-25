import Step from '~/components/Step';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ritovia' },
    { name: 'description', content: 'Welcome to Ritovia!' },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Step />
    </main>
  );
}
