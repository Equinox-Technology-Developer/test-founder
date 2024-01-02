import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoCheckmark } from 'react-icons/io5';
const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <Layout pageTitle="Terms of use">
      <main className="container mx-auto py-[140px]">
        <div className="px-[100px]">
          <nav className="mb-[60px]">
            <ul className="flex flex-wrap justify-center gap-[35px]">
              <li className="caption-semibold-1">
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
              <li className="caption-semibold-1">
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
              <li className="caption-semibold-1">
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
              <li className="caption-semibold-1">
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
              <li className="caption-semibold-1">
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
              <li className="caption-semibold-1">
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
              <li className="caption-semibold-1">
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
        </div>
        <h1 className="heading-1">Testfounder Privacy policy</h1>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">Updated December 2022</p>
          <p className="caption-regular-2">
            Testfounder B.V., a Dutch limited liability company registered with
            the Trade Register of the Chamber of Commerce under no. 77597249
            (“Testfounder”, “we,” “us” or “our”) is committed to protecting and
            respecting your privacy. This privacy policy (“Privacy Policy”)
            explains how we collect, use, share and protect data that identifies
            or is associated with you (“personal data”) in relation to our
            website www.testfounder.com including the services offered on such
            website (the “Platform”), and your choices about the collection and
            use of your information.Testfounder operates an employee and
            applicant (“Candidates”) testing platform that allows employers and
            customers (“customers”) to instruct Candidates to take aptitude,
            personality and skills tests through the Platform. Our Privacy
            Policy applies to all visitors, users, and others who access the
            Platform (“Users”). In order to use our testing platform Testfounder
            needs to process certain personal data of its Users. This Privacy
            Policy applies to all acts of processing of personal data where
            Testfounder acts as a controller in the sense of the General Data
            Protection Regulation (“GDPR”). Before accessing or using the
            Platform, please ensure that you have read and understood our
            Privacy Policy.
          </p>
          <p className="caption-regular-2">
            These Terms are a legally binding contract between You and
            Testfounder. If you do not agree with these Terms, do not register
            for a Testfounder account, or purchase or use Services. By using or
            accessing the Services, or registering for a Testfounder account,
            you agree to be bound by these Terms. If you use the Services on
            behalf of an entity, you agree to these Terms for that entity and
            represent and warrant to Testfounder that you have the authority to
            bind that entity to these Terms, unless that entity has a separate
            paid contract in effect with Testfounder, in which event the
            separate paid contract governs your use of the Services.
          </p>
          <p className="caption-regular-2">
            In these Terms, we refer collectively to these Terms, the Data
            Processing Agreement and the applicable Service Level Agreement
            (“SLA”), other instructions and policies (“Documentation”) available
            on our website (“Website”) and applicable ordering documents (“Order
            Form”, as deﬁned below) as the “Agreement.”
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="heading-3">
            1. What kind of information do we collect?
          </h3>
          <p className="caption-bold-2">
            Information we collect when you use our platform
          </p>
        </div>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            Please find below the types of personal data we may require from you
            and which we process in order to provide our services on the
            Platform:
          </p>
        </div>
        <table className="mb-10 w-full">
          <tbody>
            <tr>
              <th className="text-start">Company</th>
              <th className="text-center">Contact</th>
              <th className="text-center">Country</th>
            </tr>
            <tr>
              <td className="caption-bold-3">Personal Data</td>
            </tr>
            <tr>
              <td className="caption-regular-3">full name</td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">gender</td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">
                address, postal, code, city, state
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">e-mail address</td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">date of birth</td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">
                your username and password when you register for an account
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">video recording</td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">demographic data (optional)</td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">IP address</td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">
                career-related information (e.g. education, job history)
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">
                the answers you give to test questions
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">
                communications between you and us
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
            <tr>
              <td className="caption-regular-3">subscriptions/preferences</td>
              <td align="center">
                <IoCheckmark />
              </td>
              <td align="center">
                <IoCheckmark />
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="heading-3">
          2. For what purposes do we use your personal data?
        </h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            We use your personal data to help us provide and support (the
            services on) our Platform. Here is how:
          </p>
          <ol type="1" className="list-inside list-decimal space-y-3">
            <li className="caption-bold-2">Service provision:</li>
            <p className="caption-regular-2">
              we use the information to carry out and administer the tests you
              book or take;
            </p>
            <li className="caption-bold-2">Communication:</li>
            <p className="caption-regular-2">
              sending emails, newsletters, and other messages to keep you
              informed of the Platform. You may opt out of receiving any, or
              all, of these communications from us by following the unsubscribe
              link. We also use the personal data to deal with inquiries and
              complaints made by you relating to the Platform and to address
              your questions, issues, and concerns;
            </p>
            <li className="caption-bold-2">Website monitoring:</li>
            <p className="caption-regular-2">
              to check the Platform and our other technology services are being
              used appropriately and to optimize their functionality;
            </p>
            <li className="caption-bold-2">Platform optimization:</li>
            <p className="caption-regular-2">
              improve, test, and monitor the effectiveness of our Platform and
              diagnose or fix technology problems;
            </p>
            <li className="caption-bold-2">Managing suppliers:</li>
            <p className="caption-regular-2">who deliver services to us;</p>
            <li className="caption-bold-2">Statistics:</li>
            <p className="caption-regular-2">
              to help you efficiently access your information after you sign in
              and to remember information so you will not have to re-enter it
              during your visit or the next time you visit the Platform;
            </p>
            <li className="caption-bold-2">Development:</li>
            <p className="caption-regular-2">
              develop and test new products and features.
            </p>
            <li className="caption-bold-2">Benchmarks:</li>
            <p className="caption-regular-2">
              use aggregated and anonymized test scores and aggregated
              demographics to provide benchmarks to our customers and improve
              our services.
            </p>
            <p className="caption-regular-2">
              We only process your personal data for the above purposes and
              ensure that it is only available to those who have a legitimate
              need to know and would require access to it.
            </p>
          </ol>
        </div>
        <h3 className="heading-3">
          3. Our legal grounds for using your personal data
        </h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            We will process your personal data for a number of reasons:
          </p>
        </div>
        <ol type="1" className="mb-6 list-inside list-disc space-y-3">
          <li className="caption-regular-2">
            You have given us consent; Where we are processing personal data
            with your consent, you can withdraw your consent at any time,
            without affecting the lawfulness of processing based on consent
            before its withdrawal;
          </li>
          <li className="caption-regular-2">
            We require to process personal data for the performance of the
            contractual relationship with you;
          </li>
          <li className="caption-regular-2">
            We need to process personal data to comply with the legal
            obligations we are subject to in The Netherlands or in other
            jurisdictions, which include such obligations as accessing,
            preserving and sharing your personal data in response to a legal
            request such as a search warrant, court order, or subpoena;
          </li>
          <li className="caption-regular-2">
            processing is necessary for our legitimate business interests. Our
            legitimate interests are:
            <ol className="list-inside list-disc space-y-3 pl-5">
              <li>
                managing our business and relationship with you or your company
                or organization;
              </li>
              <li>
                understanding and responding to inquiries and User feedback;
              </li>
              <li>understanding how our Users use the Platform;</li>
              <li>
                identifying what our Users want and developing our relationship
                with you, your company or organization;
              </li>
              <li>improving our Platform and offerings;</li>
              <li>managing our supply chain;</li>
              <li>developing relationships with business partners;</li>
              <li>
                sharing data in connection with acquisitions and transfers of
                our business;
              </li>
              <li>
                If we have a good faith belief it is necessary to (i) detect,
                prevent and address fraud and other illegal activity and (ii) to
                protect ourselves, you, and others, including as part of
                investigations.
              </li>
            </ol>
          </li>
        </ol>
        <h3 className="heading-3">
          4. With whom do we share your personal data?
        </h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            Other than with our sub-processors, we share your information with
            the following parties:
          </p>
        </div>
        <ol type="1" className="mb-6 list-inside list-decimal space-y-4">
          <li className="caption-bold-2">Customers:</li>
          <p className="caption-regular-2">
            With our (prospective) customers we share information of Candidates
            in case customers administered tests to them or in case candidates
            agree to share test results with specific customers.
          </p>
          <li className="caption-bold-2">Test authors:</li>
          <p className="caption-regular-2">
            We share aggregated candidate test feedback to subject matter
            experts who have developed tests for product improvement.
          </p>
          <li className="caption-bold-2">Suppliers:</li>
          <p className="caption-regular-2">
            Who support our business including IT and communication suppliers,
            outsourced business support, business intelligence, marketing, and
            advertising agencies, and back-up vendors. Our suppliers have to
            meet minimum standards regarding information security and they will
            only be provided data in line with their function.
          </p>
        </ol>
        <h3 className="heading-3">5. Safety and security</h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            Testfounder has taken appropriate technical and organizational
            measures by using the latest technologies to protect your personal
            data against loss or unlawful processing. We keep on improving our
            safeguards to help keep the information collected through the
            Platform secure and take steps to verify your identity before
            granting you access to your account. In addition, we use
            state-of-art encryption technologies. It will also be good to know
            that we are SOC2 type 2 certified. We request you to also do your
            part to help us. You are responsible for maintaining the secrecy of
            your unique password and account information, and for controlling
            access to emails between you and us, at all times. We are not
            responsible for the functionality, privacy, or security measures of
            any other organization.
          </p>
        </div>
        <h3 className="heading-3">6. Your Rights</h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            In accordance with the GDPR you have the following rights in respect
            of your personal data that we hold:
          </p>
          <h3 className="heading-3">
            7. Third-party applications, websites, and services
          </h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              We are not responsible for the practices employed by any
              applications, websites, or services linked to or from our
              Platform, including the information or content contained within
              them. Please remember that when you use a link to go from our
              Platform to another application, website, or service, the Privacy
              Policy does not apply to those third-party applications, websites,
              or services. Your browsing and interaction on any third-party
              application, website, or service, including those with a link on
              our Platforms, are subject to that third party’s rules and
              policies. In addition, please be informed that we are not
              responsible and do not have control over any third parties you
              authorize to access your account. If you are using a third-party
              app, website, or service and you allow them to access your account
              you do so at your own risk.
            </p>
          </div>
          <h3 className="heading-3">8. How long do we keep your data?</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              We generally keep your information only as long as needed to
              provide the services on our Platform. We will retain your
              information as necessary to comply with legal, accounting, or
              regulatory requirements. The retention period for candidate data
              that is available to customers (e.g. name, email address, and test
              scores) is 2 years. Webcam pictures taken as an anti-cheating
              measure are retained for 6 months. Video recordings of candidates
              answering custom questions are retained for 2 years. Information
              we receive about you may be accessed, processed, and retained for
              an extended period of time when it is the subject of a legal
              request or obligation, governmental investigation, or
              investigations concerning possible violations of our terms or
              policies, or otherwise to prevent harm.
            </p>
          </div>
          <h3 className="heading-3">9. Where will your information be held?</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              Your information will be held on servers in the European Economic
              Area. We will take steps to protect your information in line with
              locally applicable data protection requirements. Your information
              may be transferred to and maintained on computers located outside
              of your country, where the data protection laws may differ from
              those in your jurisdiction. Where we transfer your personal data
              to a country that does not have an adequate level of data
              protection safeguards, rest assured that we have implemented the
              required supplementary security safeguards. If you are located
              outside the European Economic Area and choose to provide
              information to us, please note that we transfer the information to
              the European Economic Area.
            </p>
          </div>
          <h3 className="heading-3">10. Children</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              Our Platform does not seek to address anyone under the age of 16
              (“Children”). We do not knowingly collect personal data from
              children under 16. We conduct our verification tests with the aim
              of also establishing we are not dealing with Children. If you are
              a parent or guardian and you are aware that your Children have
              provided us with personal data, please contact us. If we become
              aware that we have collected personal data from a child under age
              16 without verification of parental consent, we take steps to
              remove that information from our servers.
            </p>
          </div>
          <h3 className="heading-3">11. Changes to this Policy</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              We may modify or update our Privacy Policy from time to time. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. You are advised to review this Privacy Policy
              periodically for any changes. Changes to this Privacy Policy are
              effective when they are posted on this page.
            </p>
          </div>
          <h3 className="heading-3">12. How to contact us</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;
