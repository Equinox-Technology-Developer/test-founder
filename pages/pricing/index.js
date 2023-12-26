import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { GoQuestion } from 'react-icons/go';
import { IoCheckmark } from 'react-icons/io5';

import { Layout } from '@/components';
import { images } from '@/constants';

import styles from './Pricing.module.scss';

const Pricing = () => {
  const [showTable, setShowTable] = useState(false);

  const handleButtonClick = () => {
    setShowTable(!showTable);
  };
  return (
    <Layout pageTitle="Pricing">
      {/* Pricing Cards */}
      <section className="bg-[#F9F9F9] bg-blur bg-right bg-no-repeat pt-0">
        <div className={`container mx-auto ${styles.container}`}>
          <div className={` ${styles.banner_blogContainer}`}>
            <div className={styles.banner_blogContentText}>
              <h1 className="sm:heading-1 heading-2">Hire Without Limits</h1>

              {/* Pricing Cards */}
              <div className={`${styles.pricingCards_wrapper}`}>
                <div className={`${styles.pricing_cards}`}>
                  <div className={`${styles.pricing_cardsTitle}`}>
                    <h2>Free</h2>
                    <p>Test for essential skills</p>
                  </div>
                  <div className={`${styles.pricing_cardsCheck}`}>
                    <p>
                      <span>
                        <IoCheckmark />
                      </span>
                      Any size company
                    </p>
                    <p>
                      <span>
                        <IoCheckmark />
                      </span>
                      Free forever
                    </p>
                  </div>
                  <div className={`${styles.pricing_price}`}>
                    <div className={`${styles.pricing_currency}`}>
                      <h2>$0</h2>
                      <div className={`${styles.pricing_details}`}>
                        <p>USD</p>
                        <h6>per month</h6>
                      </div>
                    </div>
                    <p className="text-abut">Free Forever</p>
                  </div>
                  <button type="button">Try for free</button>
                  <div className={`${styles.pricing_cardsDetail}`}>
                    <ul>
                      <li>5 free tests</li>
                      <li>
                        Designed to test widely applicable essential skills
                      </li>
                      <li>Invite unlimited candidates</li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.pricing_cards}`}>
                  <div className={`${styles.pricing_cardsTitle}`}>
                    <h2>Lite</h2>
                    <p>Hire for one role at a time</p>
                  </div>
                  <div className={`${styles.pricing_cardsCheck}`}>
                    <p>
                      <span>
                        <IoCheckmark />
                      </span>
                      Any size company
                    </p>
                    <p>
                      <span>
                        <IoCheckmark />
                      </span>
                      Free forever
                    </p>
                  </div>
                  <div className={`${styles.pricing_price}`}>
                    <div className={`${styles.pricing_currency}`}>
                      <h2>$499</h2>
                      <div className={`${styles.pricing_details}`}>
                        <p>USD</p>
                        <h6>per month</h6>
                      </div>
                    </div>
                    <p className="text-abut">Zero commitment, cancel anytime</p>
                  </div>
                  <button type="button">Talk to Sale</button>
                  <div className={`${styles.pricing_cardsDetail}`}>
                    <ul>
                      <li>All 401 tests in the test library</li>
                      <li>1 active assessment at a time</li>
                      <li>Invite unlimited candidates</li>
                      <li>
                        Custom essay, multiple choice, and file-upload questions
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.pricing_cards}  ${styles.cards_blue}`}
                >
                  <div className={`${styles.pricing_cardsTitle}`}>
                    <h2>Starter</h2>
                    <p>Hire for all roles</p>
                  </div>
                  <div className={`${styles.pricing_cardsCheck}`}>
                    <div className={`${styles.select_employees}`}>
                      <button type="button">
                        10-100 employees
                        <span>
                          <MdOutlineKeyboardArrowDown />
                        </span>
                      </button>
                    </div>
                    <div className={`${styles.select_option}`}>
                      <p className={`${styles.annual}`}>
                        Annual<span>SAVE $1,260</span>
                      </p>
                      <p className={`${styles.monthly}`}>Monthly</p>
                    </div>
                  </div>
                  <div className={`${styles.pricing_price}`}>
                    <div className={`${styles.pricing_currency}`}>
                      <h2>$700</h2>
                      <div className={`${styles.pricing_details}`}>
                        <p>USD</p>
                        <h6>per month</h6>
                      </div>
                    </div>
                    <p className="text-abu">
                      1-year commitment, pay $8,400 upfront
                    </p>
                  </div>
                  <button type="button">Start 15-day trial</button>
                  <div className={`${styles.pricing_cardsDetail}`}>
                    <ul>
                      <li>All 401 tests in the test library</li>
                      <li>Unlimited active assessments</li>
                      <li>Invite unlimited candidates</li>
                      <li>
                        Create custom essay, multiple-choice, and file-upload
                        questions
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.pricing_cards}`}>
                  <div className={`${styles.pricing_cardsTitle}`}>
                    <h2>Free</h2>
                    <p>Test for essential skills</p>
                  </div>
                  <div
                    className={`${styles.pricing_cardsCheck} ${styles.card_white}`}
                  >
                    <div className={`${styles.select_employees}`}>
                      <button type="button">
                        10-100 employees
                        <span>
                          <MdOutlineKeyboardArrowDown />
                        </span>
                      </button>
                    </div>
                    <div className={`${styles.select_option}`}>
                      <p className={`${styles.annual}`}>
                        Annual<span>SAVE $1,260</span>
                      </p>
                      <p className={`${styles.monthly}`}>Monthly</p>
                    </div>
                  </div>
                  <div className={`${styles.pricing_price}`}>
                    <div className={`${styles.pricing_currency}`}>
                      <h2>$1000</h2>
                      <div className={`${styles.pricing_details}`}>
                        <p>USD</p>
                        <h6>per month</h6>
                      </div>
                    </div>
                    <p className="text-abut">
                      1-year commitment, pay $12,000 upfront
                    </p>
                  </div>
                  <button type="button">Start 15-day trial</button>
                  <div className={`${styles.pricing_cardsDetail}`}>
                    <ul>
                      <li>Everything in the Starter plan, plus...</li>
                      <li>API access and ATS integration</li>
                      <li>Custom tests and coding challenges</li>
                      <li>Custom branded assessments</li>
                      <li>Video questions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                <b>Fair usage statement:</b>  Unlimited evaluation for internal
                or direct recruitment only. <Link href="/">Contact us</Link> for
                recruiting agencies or sourcing platforms pricing.
              </p>

              <div className={`${styles.table_details}`}>
                <button
                  id="button_compare"
                  name="button_compare"
                  type="button"
                  className={`${styles.button_compare}`}
                  onClick={handleButtonClick}
                >
                  {' '}
                  Compare plans in detail{' '}
                  <span>
                    <MdOutlineKeyboardArrowDown />
                  </span>{' '}
                </button>
                {/* Detail Table Comparison */}
                {showTable && (
                  <div
                    className={`${styles.table_comparisonDetail} ${styles.detail_head}`}
                  >
                    {/* Content of the comparison detail table goes here */}
                    {/* You can replace this div with your actual comparison detail table */}
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      ></div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    {/* Assessment & Test */}
                    <div className={`${styles.table_row} ${styles.table_head}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment & Test
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>1</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Test library
                      </div>
                      <div className={`${styles.table_cell}`}>
                        5{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Tests per assessment
                      </div>
                      <div className={`${styles.table_cell}`}>5</div>
                      <div className={`${styles.table_cell}`}>5</div>
                      <div className={`${styles.table_cell}`}>5</div>
                      <div className={`${styles.table_cell}`}>5</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Custom questions per assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Coming Soon</div>
                      <div className={`${styles.table_cell}`}>5</div>
                      <div className={`${styles.table_cell}`}>5</div>
                      <div className={`${styles.table_cell}`}>20</div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Qualifying questions
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        30-60 minutes
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Typical assessment length
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Test recommendations based on job roles
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment templates based on job roles
                      </div>
                      <div className={`${styles.table_cell}`}>1</div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment deadlines
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        File upload questions
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Video interview questions
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>

                    {/* Skill-Based Hiring & Test */}
                    <div className={`${styles.table_row} ${styles.table_head}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Skill-Based Hiring
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Candidate evaluation
                      </div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Public link to invite candidates
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Customize invitation and rejection emails
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        No login required for candidates
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Mobile-friendly
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Help and support for your candidates
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Manual and automated bulk actions to manage candidates
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Your company's intro or outro video
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Create custom tests
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Multiple public links to invite candidates
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Brand assessments with your logo and color
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Manage user access to assessments
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}>
                        <IoCheckmark className="h-6 w-6" color="#0bc175" />
                      </div>
                    </div>

                    {/* Functionality to hire Developers & Test */}
                    {/* <div className={`${styles.table_row} ${styles.table_head}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Functionality to hire Developers
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>1</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Test library
                      </div>
                      <div className={`${styles.table_cell}`}>
                        5{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div> */}

                    {/* Reporting & Analytics & Test */}
                    {/* <div className={`${styles.table_row} ${styles.table_head}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Reporting & Analytics
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>1</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Test library
                      </div>
                      <div className={`${styles.table_cell}`}>
                        5{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div> */}

                    {/* Customer Support & Test */}
                    {/* <div className={`${styles.table_row} ${styles.table_head}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Reporting & Analytics
                      </div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                      <div className={`${styles.table_cell}`}></div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>1</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                      <div className={`${styles.table_cell}`}>Unlimited</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Test library
                      </div>
                      <div className={`${styles.table_cell}`}>
                        5{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                      <div className={`${styles.table_cell}`}>
                        401 test{' '}
                        <span>
                          <GoQuestion />
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div>
                    <div className={`${styles.table_row} ${styles.bg_abu}`}>
                      <div
                        className={`${styles.table_cell} ${styles.table_cellTitle}`}
                      >
                        Assessment
                      </div>
                      <div className={`${styles.table_cell}`}>Free</div>
                      <div className={`${styles.table_cell}`}>Lite</div>
                      <div className={`${styles.table_cell}`}>Starter</div>
                      <div className={`${styles.table_cell}`}>Pro</div>
                    </div> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="bg-[#0C4B9A] bg-no-repeat pt-0">
        <div className="container mx-auto">
          <div className="relative flex flex-col items-center justify-between py-10 sm:static lg:flex-row">
            <div className="relative ml-8 flex w-full justify-center md:w-full lg:w-full lg:max-w-lg">
              <Image
                src={images.HeroImageMiddleBanner_pricing}
                alt="Hero Image"
                width={552}
                height={457}
                sizes="100vw"
                className=" z-10flex h-auto w-[80%] md:w-[60%] lg:w-full"
              />
            </div>
            <div
              className={`flex max-w-2xl flex-col items-center text-center text-white md:mb-0 md:w-full md:items-center md:px-[0px] md:py-[32px] md:text-left lg:flex-grow lg:items-start lg:pr-24  ${styles.text_middleBanner}`}
            >
              <h1 className="sm:heading-1 heading-2 m-0 mb-6 flex">
                <RiDoubleQuotesL />
              </h1>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center font-light lg:text-start">
                We receive 100’s of applications each year and struggled to
                select the best ones efficiently and without bias. With
                TestFounder we now automate our candidate screening based on job
                skills and fit. It saves us so much time and good candidates
                love to showcase their talent!{' '}
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center font-light lg:text-start">
                <b>Esther Howard</b>, Head of Global Recruiting, AKG
                International{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section}`}>
        <div className={`container mx-auto`}>
          <div className={`${styles.content_wrapper}`}>
            <h2>Frequently Asked Questions</h2>
            <div className={`${styles.topicsIcon_wrapper}`}>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>How do I get started?</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>What payment methods do you accept?</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>How does Testfounder’s pricing work?</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>
                  What’s then difference between an assessment and last a test?
                </p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>What are caniddates?</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>Is TestFounder easy to use?</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>
                  Which Applicant Track System can integrate with TesFounder?
                </p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>What type of support do you offer?</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>How does TestFounder protect my data?</p>
              </div>
              <div className={`${styles.topic_single}`}>
                <Image
                  src="/assets/faq_grey.svg"
                  width={60}
                  height={60}
                  alt="Icon Topics FAQ"
                />
                <p>I have more questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
