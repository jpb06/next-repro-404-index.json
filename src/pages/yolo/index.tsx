import { ServerSideProps } from '@/types/server-side-props.type';
import Link from 'next/link';

export default function Yolo() {
  return (
    <div>
      Yolo
      <Link href="/">Home</Link>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }: ServerSideProps) => {
  console.info('Yolo page getServerSideProps');

  return { props: { user: null } };
};
