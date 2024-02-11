import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { GoQuestion } from 'react-icons/go';
import { IoCheckmark } from 'react-icons/io5';

import { Layout } from '@/components';
import { images } from '@/constants';
import { fetchContentfulEntries } from '@/lib/contentful/client';

import styles from './Pricing.module.scss';

export default function Pricing({ contentfulEntries }) {
  console.log(contentfulEntries);
  const [showTable, setShowTable] = useState(false);
  const [selectedOption, setSelectedOption] = useState('31-50'); // Default option
  const [showOptionsStarter, setshowOptionsStarter] = useState(false);
  const [showOptionsPro, setshowOptionsPro] = useState(false);
  const [billingOption, setBillingOption] = useState('annual'); // Default billing option
  const [showQuestion, setShowQuestion] = useState(false);

  const handleOptionChangeStarter = (option) => {
    setSelectedOption(option);
    setshowOptionsStarter(false);
  };

  const handleOptionChangePro = (option) => {
    setSelectedOption(option);
    setshowOptionsPro(false);
  };

  const handleBillingOptionChange = (option) => {
    if (selectedOption !== '1-15') {
      setBillingOption(option);
    }
  };

  const renderPriceDetails = () => {
    switch (selectedOption) {
      case '1-15':
        return {
          price: billingOption === 'annual' ? 75 : null, // Monthly price not available for 1-15 employees
          savings: '',
          upfront: billingOption === 'annual' ? '$900 upfront' : 'monthly',
          pro_price: billingOption === 'annual' ? 115 : null, // Monthly price not available for 1-15 employees
          pro_savings: '',
          pro_upfront:
            billingOption === 'annual' ? '$1,380 upfront' : 'monthly',
        };
      case '16-30':
        return {
          price: billingOption === 'annual' ? 138 : 120,
          savings: 'SAVE $216',
          upfront: billingOption === 'annual' ? '$1440 upfront' : 'monthly',
          pro_price: billingOption === 'annual' ? 165 : 190, // Monthly price not available for 1-15 employees
          pro_savings: 'SAVE $300',
          pro_upfront:
            billingOption === 'annual' ? '$1,980 upfront' : 'monthly',
        };
      case '31-50':
        return {
          price: billingOption === 'annual' ? 240 : 208,
          savings: 'SAVE $384',
          upfront: billingOption === 'annual' ? '$2496 upfront' : 'monthly',
          pro_price: billingOption === 'annual' ? 310 : 360, // Monthly price not available for 1-15 employees
          pro_savings: 'SAVE $600',
          pro_upfront:
            billingOption === 'annual' ? '$3,720 upfront' : 'monthly',
        };
      case '51-100':
        return {
          price: billingOption === 'annual' ? 460 : 400,
          savings: 'SAVE $720',
          upfront: billingOption === 'annual' ? '$4800 upfront' : 'monthly',
          pro_price: billingOption === 'annual' ? 555 : 640, // Monthly price not available for 1-15 employees
          pro_savings: 'SAVE $1,020',
          pro_upfront:
            billingOption === 'annual' ? '$6,600 upfront' : 'monthly',
        };
      default:
        return {
          price: billingOption === 'annual' ? 700 : null,
          savings: 'SAVE $900',
          upfront: billingOption === 'annual' ? '$900 upfront' : 'monthly',
          pro_price: billingOption === 'annual' ? 115 : null, // Monthly price not available for 1-15 employees
          pro_savings: '',
          pro_upfront: billingOption === 'annual' ? '$900 upfront' : 'monthly',
        };
    }
  };

  const { price, savings, upfront, pro_price, pro_savings, pro_upfront } =
    renderPriceDetails();

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
              <h1 className="sm:heading-1 heading-2">
                {contentfulEntries.topBanner.fields.headline}
              </h1>

              {/* Pricing Cards */}
              <div className={`${styles.pricingCards_wrapper}`}>
                {/* Free */}
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
                {/* Lite */}
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
                {/* Starter */}
                <div
                  className={`${styles.pricing_cards}  ${styles.cards_blue}`}
                >
                  <div className={`${styles.pricing_cardsTitle}`}>
                    <h2>Starter</h2>
                    <p>Hire for all roles</p>
                  </div>
                  <div className={`${styles.pricing_cardsCheck}`}>
                    <div className={`${styles.select_employees}`}>
                      <button
                        type="button"
                        onClick={() =>
                          setshowOptionsStarter(!showOptionsStarter)
                        }
                      >
                        {`${selectedOption} employees`}
                        <span>
                          <MdOutlineKeyboardArrowDown />
                        </span>
                      </button>
                      {showOptionsStarter && (
                        <div className={`${styles.select_options}`}>
                          <div
                            onClick={() => handleOptionChangeStarter('1-15')}
                            className={styles.option_selected}
                          >
                            1-15 employees
                          </div>
                          <div
                            onClick={() => handleOptionChangeStarter('16-30')}
                            className={styles.option_selected}
                          >
                            16-30 employees
                          </div>
                          <div
                            onClick={() => handleOptionChangeStarter('31-50')}
                            className={styles.option_selected}
                          >
                            31-50 employees
                          </div>
                          <div
                            onClick={() => handleOptionChangeStarter('51-100')}
                            className={styles.option_selected}
                          >
                            51-100 employees
                          </div>
                        </div>
                      )}
                    </div>
                    <div className={`${styles.select_option}`}>
                      <p
                        className={`${styles.annual} ${
                          billingOption === 'annual' && styles.selected
                        }`}
                        onClick={() => handleBillingOptionChange('annual')}
                      >
                        Annual<span>{savings}</span>
                      </p>
                      <p
                        className={`${styles.monthly} ${
                          billingOption === 'monthly' && styles.selected
                        }`}
                        onClick={() =>
                          selectedOption !== '1-15' &&
                          handleBillingOptionChange('monthly')
                        }
                        style={{
                          cursor:
                            selectedOption === '1-15'
                              ? 'not-allowed'
                              : 'pointer',
                        }}
                      >
                        Monthly
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.pricing_price}`}>
                    <div className={`${styles.pricing_currency}`}>
                      <h2>${price}</h2>
                      <div className={`${styles.pricing_details}`}>
                        <p>USD</p>
                        <h6>per month</h6>
                      </div>
                    </div>
                    <p className="text-abu">{`1-year commitment, pay ${upfront}`}</p>
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
                {/* Pro */}
                <div className={`${styles.pricing_cards}`}>
                  <div className={`${styles.pricing_cardsTitle}`}>
                    <h2>Pro</h2>
                    <p>Maximize your hiring process</p>
                  </div>
                  <div
                    className={`${styles.pricing_cardsCheck} ${styles.card_white}`}
                  >
                    <div className={`${styles.select_employees}`}>
                      <button
                        type="button"
                        onClick={() => setshowOptionsPro(!showOptionsPro)}
                      >
                        {`${selectedOption} employees`}
                        <span>
                          <MdOutlineKeyboardArrowDown />
                        </span>
                      </button>
                      {showOptionsPro && (
                        <div className={`${styles.select_options}`}>
                          <div
                            onClick={() => handleOptionChangePro('1-15')}
                            className={styles.option_selected}
                          >
                            1-15 employees
                          </div>
                          <div
                            onClick={() => handleOptionChangePro('16-30')}
                            className={styles.option_selected}
                          >
                            16-30 employees
                          </div>
                          <div
                            onClick={() => handleOptionChangePro('31-50')}
                            className={styles.option_selected}
                          >
                            31-50 employees
                          </div>
                          <div
                            onClick={() => handleOptionChangePro('51-100')}
                            className={styles.option_selected}
                          >
                            51-100 employees
                          </div>
                        </div>
                      )}
                    </div>
                    <div className={`${styles.select_option}`}>
                      <p
                        className={`${styles.annual} ${
                          billingOption === 'annual' && styles.selected
                        }`}
                        onClick={() => handleBillingOptionChange('annual')}
                      >
                        Annual<span>{pro_savings}</span>
                      </p>
                      <p
                        className={`${styles.monthly} ${
                          billingOption === 'monthly' && styles.selected
                        }`}
                        onClick={() =>
                          selectedOption !== '1-15' &&
                          handleBillingOptionChange('monthly')
                        }
                        style={{
                          cursor:
                            selectedOption === '1-15'
                              ? 'not-allowed'
                              : 'pointer',
                        }}
                      >
                        Monthly
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.pricing_price}`}>
                    <div className={`${styles.pricing_currency}`}>
                      <h2>${pro_price}</h2>
                      <div className={`${styles.pricing_details}`}>
                        <p>USD</p>
                        <h6>per month</h6>
                      </div>
                    </div>
                    <p className="text-abu">{`1-year commitment, pay ${pro_upfront}`}</p>
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
                <b>
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[0]
                      .content[0].value
                  }
                </b>
                {
                  contentfulEntries.topBanner.fields.bodyText.content[0]
                    .content[1].value
                }
                <Link
                  href={
                    contentfulEntries.topBanner.fields.bodyText.content[0]
                      .content[2].data.uri
                  }
                >
                  {
                    contentfulEntries.topBanner.fields.bodyText.content[0]
                      .content[2].content[0].value
                  }
                </Link>
                {
                  contentfulEntries.topBanner.fields.bodyText.content[0]
                    .content[3].value
                }
              </p>

              {/* Pricing Details */}
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
                src={`https:${contentfulEntries.topSection[0].fields.image.fields.file.url}`}
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
                {
                  contentfulEntries.topSection[0].fields.bodyText.content[0]
                    .content[0].value
                }
              </p>
              <p className="caption-regular-3 sm:caption-regular-1 mb-6 mt-0 text-center font-light lg:text-start">
                <b>
                  {
                    contentfulEntries.topSection[0].fields.bodyText.content[1]
                      .content[0].value
                  }
                </b>
                {
                  contentfulEntries.topSection[0].fields.bodyText.content[1]
                    .content[1].value
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section}`}>
        <div className={`container mx-auto`}>
          <div className={`${styles.content_wrapper}`}>
            <h2>{contentfulEntries.pageContent[0].fields.headline}</h2>
            <div className={`${styles.topicsIcon_wrapper}`}>
              {contentfulEntries.faq.map((faq, index) => (
                <div
                  className={`${styles.topic_single}`}
                  key={index}
                  onClick={() => setShowQuestion(index)}
                >
                  <Image
                    src={`https:${faq.fields.icon.fields.file.url}`}
                    width={60}
                    height={60}
                    alt="Icon Topics FAQ"
                  />
                  <div className="flex flex-col">
                    <p
                      className={`${
                        showQuestion === index ? 'mb-1 font-bold' : ''
                      }`}
                    >
                      {faq.fields.headline}
                    </p>
                    {showQuestion === index && <p>{faq.fields.question}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentfulEntries = await fetchContentfulEntries('landingPage');

  // Check if contentfulEntries is an array before filtering
  const filteredEntries = Array.isArray(contentfulEntries.items)
    ? contentfulEntries.items.find((entry) => {
        console.log(entry.fields.internalName);
        return entry.fields.internalName === 'Pricing';
      }).fields // Return only the .fields property
    : {};

  return {
    props: {
      contentfulEntries: filteredEntries,
    },
  };
}
