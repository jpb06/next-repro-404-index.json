import { ServerSideProps } from '@/types/server-side-props.type';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Index
      <Link href="/yolo">Yolo</Link>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }: ServerSideProps) => {
  console.info('Index page getServerSideProps');

  return { props: { user: null } };
};
