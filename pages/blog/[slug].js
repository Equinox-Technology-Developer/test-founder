import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { Layout } from '@/components';
import { images } from '@/constants';

export default function Blog(props) {
  const router = useRouter();
  return (
    <main key={router.query.slug}>
      <div>{router.query.slug}</div>
    </main>
  );
}
