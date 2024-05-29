import { NextApiRequest, NextApiResponse } from 'next';

export type ServerSideProps = {
  req: NextApiRequest;
  res: NextApiResponse;
};
