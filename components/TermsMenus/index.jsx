import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TermsMenus() {
  const router = useRouter();
  return (
    <nav className="mb-[60px]">
      <ul className="flex flex-wrap justify-center gap-[35px]">
        <li className="md:caption-semibold-1 caption-semibold-2">
          <Link
            href="/terms"
            className={
              router.pathname == '/terms'
                ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                : 'text-black'
            }
          >
            Customer term of use
          </Link>
        </li>
        <li className="lg:caption-semibold-1 caption-semibold-2">
          <Link
            href="/candidate-terms"
            className={
              router.pathname == '/candidate-terms'
                ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                : 'text-black'
            }
          >
            Candidate term of use
          </Link>
        </li>
        <li className="lg:caption-semibold-1 caption-semibold-2">
          <Link
            href="/privacy-policy"
            className={
              router.pathname == '/privacy-policy'
                ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                : 'text-black'
            }
          >
            Privacy policy
          </Link>
        </li>
        <li className="lg:caption-semibold-1 caption-semibold-2">
          <Link
            href="/cookie-policy"
            className={
              router.pathname == '/cookie-policy'
                ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                : 'text-black'
            }
          >
            Cookie policy
          </Link>
        </li>
        <li className="lg:caption-semibold-1 caption-semibold-2">
          <Link
            href="/security-measures"
            className={
              router.pathname == '/security-measures'
                ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                : 'text-black'
            }
          >
            Security measures
          </Link>
        </li>
        <li className="lg:caption-semibold-1 caption-semibold-2">
          {' '}
          <Link
            href="/dpa"
            className={
              router.pathname == '/dpa'
                ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                : 'text-black'
            }
          >
            Data processing agreement
          </Link>
        </li>
        <li className="lg:caption-semibold-1 caption-semibold-2">
          {' '}
          <Link
            href="/service-level-agreement"
            className={
              router.pathname == '/service-level-agreement'
                ? 'rounded-[20px] bg-primary-200 px-4 text-primary-500'
                : 'text-black'
            }
          >
            Service level agreement
          </Link>
        </li>
      </ul>
    </nav>
  );
}
