import React from 'react';

import { Layout } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Terms = () => {
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
        <h1 className="heading-1">Customer terms of use</h1>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">Version v1 – December 2022</p>
          <p className="caption-semibold-2">Introducing</p>
          <p className="caption-regular-2">
            These Testfounder Terms of Service (hereafter the “Terms”), outline
            the terms regarding Your use of the Services and are an integral
            part of the agreement between you (“you”, “your,” or “Customer) and
            Testfounder B.V. (“Testfounder”, “us”, “we”, or “our”). You or
            Testfounder may also be referred to individually as a “Party” and
            together as “Parties” in these Terms. An “Aﬃliate” means any company
            or other entity, whether or not a legal person, which directly or
            indirectly controls, is controlled by or is under joint control with
            that person. For the purpose of this definition, “control” means (a)
            any direct or indirect ownership of over 50% of the ownerships, or
            (b) in the absence of such ownership interest, the power to direct
            or cause the direction of the management and set the policies of
            such company or entity.
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
        <h3 className="heading-3">1. Grant of access and use</h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            1.1. Subject to the terms and conditions of the Agreement (including
            our receipt of applicable fees) Testfounder hereby grants to you,
            and you accept, a limited, personal, non-exclusive,
            non-sublicensable, non-transferable, non-assignable license to
            access and use the Services solely for your own internal business
            purposes.
          </p>
          <p className="caption-regular-2">
            1.2. Access and use of the Services are provided to any limited
            number of individuals taking the tests as provided as part of the
            Services as authorized by the Customer under the rights granted
            pursuant to the Agreement as specified in the Order Form
            (“Candidates”).
          </p>
          <p className="caption-regular-2">
            1.3. Subject to prior written approval by Testfounder, your
            Affiliates may use the Services without entering into a separate
            Order Form by providing such Affiliate(s) a login ID and password to
            access and use the Services. The Agreement shall apply to each
            Affiliate with access to your account, and you are directly and
            primarily responsible for all access to and use of the Services by
            your Affiliates. References in these Terms to you, shall include a
            reference to your Affiliates.
          </p>
        </div>
        <h3 className="heading-3">2. The Services</h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            2.1. The “Services” include all products and services provided by
            Testfounder that (a) have been ordered by the Customer under any
            applicable ordering document (either via the Website or otherwise)
            that specifies pricing and other commercial terms (“Order Form”); or
            (b) is used by you. Our Services are not intended for personal or
            private individual use but are designed and intended for commercial
            use only.
          </p>
          <p className="caption-regular-2">
            2.2. Testfounder will provide the Services in accordance with (a)
            the terms of the Agreement; and (b) in accordance with the
            applicable laws; and (c) the Information Security Measures.
          </p>
          <p className="caption-regular-2">
            2.3. We may provide the Services, or a portion thereof, to you
            through our Affiliates in accordance with these Terms and any
            applicable Order Form(s). Testfounder shall remain responsible at
            all times for any Services or part thereof, provided by our
            Aﬃliates.
          </p>
        </div>
        <h3 className="heading-3">3. Your Account</h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            3.1. In order to use our Services, it is required to create an
            account. To create an account, you (i) must be legally authorized to
            represent the company or business contracting our Services; and (ii)
            must review and accept these Terms on the Customer’s behalf. To
            create an account, you must provide your email address and create a
            password. You agree to provide us with information that is accurate,
            complete, and current during your use of the Services. Failure to do
            so constitutes a breach of the Terms, which may result in
            termination of your account on our Service.t
          </p>
          <p className="caption-regular-2">
            3.2. You are responsible for safeguarding the password that you use
            to access the Service and for any activities or actions under your
            password. You agree not to disclose your password to any third
            party.
          </p>
          <p className="caption-regular-2">
            3.3. You must notify us immediately upon becoming aware of any
            breach of security or unauthorized use of your account. You are
            responsible for preventing unauthorized access to or use of the
            Services through your account and will notify Testfounder
            immediately of any such unauthorized access or use. Testfounder is
            not liable for any loss or damage arising from unauthorized use of
            your account.
          </p>
        </div>
        <h3 className="heading-3">4. User rights and responsibilities</h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            4.1. In using the Services, you agree to use the Services only in
            accordance with these Terms and any applicable Documentation, Order
            Form(s), and applicable laws.
          </p>
          <p className="caption-regular-2">
            4.2. You will be solely responsible for all use of the Services
            under your account including all applications, web domains, devices,
            and communication channels owned or controlled by you or owned or
            controlled by third parties and made available by you to the
            Candidates which access, use, interact with, or depend on the
            Services (each, a “Customer Application”).
          </p>
          <p className="caption-regular-2">
            4.3. You shall not: (a) duplicate any portion of the Services, or
            any documentation (except for your internal use); (b) modify,
            translate, decompile, reverse engineer, disassemble, adapt the
            Services, or attempt to derive the source code of the software
            offered through the Services; (c) use the Services, or allow the
            transfer, transmission, export, or re-export of the Services or
            portion thereof in violation of any applicable law, regulation or
            rule; (d) develop any software or service that is derived from the
            Services and materially similar in function to or competes with the
            Services; (e) bypass, hack or breach any security device or
            protection used by the Services or access or use the Services, with
            or without automated means (such as scrape, crawl or spider); (f)
            remove, modify or obscure any identification or proprietary or
            restrictive rights markings or notices from the Services or any
            component thereto; (g) input, upload, transmit, or otherwise provide
            to or through the Services, any information or materials that are
            unlawful or injurious, including the distribution or publication of
            information that is in violation of applicable law, contrary to
            public order or public morality, or contain, transmit, or activate
            any software, hardware, or other technology, device, or means,
            including any virus, worm, malware, or other malicious computer
            code; or (h) aid or assist any third parties in doing any of the
            above.
          </p>
          <p className="caption-regular-2">
            4.4. You will not lease, (re)sell, (sub)license, assign, distribute,
            publish, transfer, or otherwise make available any Services to third
            parties (except Candidates), unless explicitly permitted under the
            Agreement.
          </p>
          <p className="caption-regular-2">
            4.5. The Services can only be used by Candidates that are at least
            sixteen (16) years old.
          </p>
          <p className="caption-regular-2">
            4.6. If you or any of the Candidates or any other person authorized
            to use the Services through your account violates the above
            restrictions or threatens to violate them, Testfounder is entitled
            to intervene, without prior consultation with you, to terminate the
            violation or to prevent any imminent danger, for example by
            disabling the account of the relevant Candidates or your access to
            the Services. You will be liable for any damage caused by your use
            of the Services through your account in violation of these
            restrictions. Testfounder is at all times entitled to report
            criminal offenses, directly related to your violation of the
            restrictions, it has discovered and shall have no liability for any
            damage to you that may result from such reports.
          </p>
        </div>
        <h3 className="heading-3">5. Account suspension</h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            5.1. We shall have the right to remove any inappropriate content
            from the Services, limit, or suspend your access to your account and
            the Services with immediate effect and without prior notice in the
            event that, in our reasonable determination if: (a) your use or the
            use of Candidates of the Services is for any unlawful, unauthorized
            or fraudulent purpose; (b) you or Candidates are in material breach
            of any provision of the Agreement; (c) your use of the Services is
            materially adversely threatening the security, availability or
            integrity of the Services or our ability to provide service to other
            customers; (d) our provision or your use of the Services is not
            permitted by applicable laws or regulations; (e) the account
            information you have provided is incorrect or incomplete; or (f) you
            are in breach of your payment obligations under the Agreement. If
            your account or use of the Services is suspended by us as a result
            of your actions or omissions pursuant to this article 5 or Article 8
            (Fees and Payment Terms), Testfounder does not have any liability
            for damages or losses (including any loss of data or proﬁts), or any
            other consequences that you may incur as a result. You will remain
            responsible for the Fees (as deﬁned below) during any suspension.
          </p>
        </div>
        <h3 className="heading-3">
          6. Maintenance and Downtime, Modifications
        </h3>
        <div className="my-6 space-y-4">
          <p className="caption-regular-2">
            6.1. The Services may occasionally become unavailable due to (a) the
            performance of scheduled or unscheduled maintenance, modifications,
            or upgrades; (b) hardware failures, or failures of third-party
            providers; (c) to mitigate or prevent the effects of any threat or
            attack to the Services or any other network or systems on which the
            Services rely; or (d) as necessary for legal or regulatory reasons.
            We will use reasonable efforts to communicate any scheduled service
            outages to you in advance.
          </p>
          <p className="caption-regular-2">
            6.2. Unless specifically stipulated in an Order Form, the SLA or the
            Website, Testfounder is not liable for any damages, losses
            (including loss of data or proﬁts), or any other consequences
            incurred as a result of unavailability of Services or the failure to
            provide notice of unavailability.
          </p>
          <p className="caption-regular-2">
            6.3. We have the right to occasionally modify the features and
            operations of the Services. If we do, we will use reasonable efforts
            to inform you. We agree such changes to the Service will not
            materially diminish the overall features or functionality of the
            Services. Your continued use of the Services following the posting
            or notice of the changes will constitute your acceptance of such
            changes. If you do not agree to such changes, you must stop using
            the Services immediately. We will notify you in line with Section 15
            (Amendments) if applicable legislation requires Testfounder to
            provide you with specific notice of any such change.
          </p>
          <h3 className="heading-3">7. Free Plan and Beta Products</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              7.1. We may invite you to test out new or additional products or
              features of our Services that are not generally available to all
              of our customers (“Beta Products”) or use our Services free of
              charge (“Free Plan Products”).
            </p>
            <p className="caption-regular-2">
              7.2. Beta Products and Free Plan Products may contain errors and
              are provided for limited evaluation only.
            </p>
            <p className="caption-regular-2">
              7.4. Beta Products and Free Plan Products are provided “AS IS”
              without warranty of any kind, whether express, implied, statutory,
              or otherwise. Testfounder specifically disclaims all implied
              warranties of merchantability, noninfringement and fitness for a
              particular purpose in relation to Beta Products and Free Plan
              Products.
            </p>
            <p className="caption-regular-2">
              7.5. Testfounder does not have any obligation to provide Beta
              Products and Free Plan Products to any customer or to our general
              customer base. Testfounder is entitled to terminate or discontinue
              a Beta Product or Free Plan Product at any moment.
            </p>
          </div>
          <h3 className="heading-3">8. Fees and Payment Terms</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              8.1. You shall pay Testfounder all fees as set forth in the
              pricing section or in accordance with the applicable rates as
              published on the Website, unless agreed otherwise in writing by
              the Parties in the Order Form (the “Fees“).
            </p>
            <p className="caption-regular-2">
              8.2. The Services are billed on a subscription basis. You will be
              billed in advance on a recurring and periodic basis (“Billing
              Cycle”). Billing Cycles are set either on a monthly or annual
              basis, depending on the type of subscription plan you select as
              indicated in the Order Form or the Website.
            </p>
            <p className="caption-regular-2">
              8.3. All payment obligations are non-cancelable, and Fees and
              taxes, once paid, are non-refundable. Except as otherwise set
              forth in the applicable Order Form(s) and subject to Section 8.9
              (payment disputes), you will pay the Fees due under these Terms in
              accordance with the following applicable payment method: (a) if
              you elect to remit the Fees using a credit card or PayPal, you
              represent and warrant that you are authorized to use that credit
              card or PayPal account, that any and all Fees may be billed to
              that credit card or PayPal account, and that payment of such Fees
              will not be declined; or (b) if you elect to receive invoices and
              Testfounder approves you for the same, invoices will be sent to
              you at the frequency set forth in the applicable Order Form and
              you will pay the Fees due within twenty (20) days of the date of
              the invoice.
            </p>
            <p className="caption-regular-2">
              8.4. You shall provide Testfounder with accurate and complete
              billing information including full name, address, state, zip code,
              country, telephone number, and a valid VAT or applicable tax
              registration number and notify us of any changes to such
              information. By submitting the payment information, you
              automatically authorize Testfounder to charge all Fees incurred
              through your account to any such selected payment instruments.
            </p>
          </div>
          <h3 className="heading-3">9. Intellectual Property and Data</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
          </div>
          <h3 className="heading-3">
            10. Representations, Warranties, and Disclaimer
          </h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
          </div>
          <h3 className="heading-3">11. Indemniﬁcation</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
          </div>
          <h3 className="heading-3">12. Limitation of Liability</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
          </div>
          <h3 className="heading-3">13. Confidentiality</h3>
          <div className="my-6 space-y-4">
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
            <p className="caption-regular-2">
              Lorem ipsum dolor sit amet consectetur. Proin pulvinar arcu
              facilisi sit condimentum. Eros risus ultrices placerat mattis
              adipiscing dictum sed pulvinar cras. Consectetur sem dignissim
              tempor pretium. Non egestas dignissim scelerisque dictum. Laoreet
              pellentesque eget proin cursus. Imperdiet magna nibh varius amet
              turpis.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Terms;
