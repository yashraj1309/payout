import React from 'react'
import './Transactions.css';
import Search from "./Dashboard_Resources/search.svg";
export default function Transactions() {
  return (
    <div className="transaction">
      <div className="trans_buttons">
        <div className="trans_text">Transactions | This Month</div>
        <div className="trans_btns">
          <button>Payouts (22)</button>
          <button className="active">Refunds (6)</button>
        </div>
      </div>
      <div className="trans_table">
        <div className="trans_search_row">
          <div className="frame2 transactions_SEARCH">
            <img src={Search} alt="search"></img>
            <input type="text" placeholder="Order ID or transaction ID" />
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div className="trans_search_row_sort">
              <span>Sort</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.62496 9.93424C1.83324 9.72596 2.17093 9.72596 2.37921 9.93424L4.64295 12.198L6.90669 9.93424C7.11497 9.72596 7.45266 9.72596 7.66094 9.93424C7.86922 10.1425 7.86922 10.4802 7.66094 10.6885L5.02007 13.3294C4.81179 13.5376 4.47411 13.5376 4.26583 13.3294L1.62496 10.6885C1.41668 10.4802 1.41668 10.1425 1.62496 9.93424Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.6429 2.51564C4.93746 2.51564 5.17624 2.75442 5.17624 3.04897L5.17624 12.9522C5.17624 13.2468 4.93746 13.4856 4.6429 13.4856C4.34835 13.4856 4.10957 13.2468 4.10957 12.9522L4.10957 3.04897C4.10957 2.75442 4.34835 2.51564 4.6429 2.51564Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3792 6.06695C14.1709 6.27523 13.8332 6.27523 13.6249 6.06695L11.3612 3.8032L9.09745 6.06695C8.88917 6.27523 8.55149 6.27523 8.34321 6.06695C8.13493 5.85867 8.13493 5.52098 8.34321 5.3127L10.9841 2.67183C11.1924 2.46356 11.53 2.46356 11.7383 2.67183L14.3792 5.3127C14.5875 5.52098 14.5875 5.85867 14.3792 6.06695Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3612 13.4855C11.0667 13.4855 10.8279 13.2468 10.8279 12.9522L10.8279 3.04896C10.8279 2.75441 11.0667 2.51563 11.3612 2.51563C11.6558 2.51563 11.8946 2.75441 11.8946 3.04896L11.8946 12.9522C11.8946 13.2468 11.6558 13.4855 11.3612 13.4855Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
            <div className="trans_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="th_tr">
            <div className="th">Order ID</div>
            <div className="th">Status</div>
            <div className="th">Transaction ID</div>
            <div className="th">Refund date</div>
            <div className="th">Order amount</div>
          </div>
          <div className="tr">
            <div className="td table_order">#281209</div>
            <div className="td">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  style={{ marginRight: "6px" }}
                >
                  <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                </svg>
                Successful
              </div>
            </div>
            <div className="td transaction_id">131634495747</div>
            <div className="td">Today, 08:45 PM</div>
            <div className="td">₹1,125.00</div>
          </div>
          <div className="divider"></div>
          <div className="tr">
            <div className="td table_order">#281208</div>
            <div className="td">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  style={{ marginRight: "6px" }}
                >
                  <circle cx="5.33594" cy="5" r="5" fill="#999999" />
                </svg>
                Processing
              </div>
            </div>
            <div className="td transaction_id">131634495747</div>
            <div className="td">Yesterday, 3:00 PM</div>
            <div className="td">₹1,125.00</div>
          </div>
          <div className="divider"></div>
          <div className="tr">
            <div className="td table_order">#281207</div>
            <div className="td">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  style={{ marginRight: "6px" }}
                >
                  <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                </svg>
                Successful
              </div>
            </div>
            <div className="td transaction_id">131634495747</div>
            <div className="td">12 Jul 2023, 03:00 PM</div>
            <div className="td">₹1,125.00</div>
          </div>
          <div className="divider"></div>
          <div className="tr">
            <div className="td table_order">#281206</div>
            <div className="td">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  style={{ marginRight: "6px" }}
                >
                  <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                </svg>
                Successful
              </div>
            </div>
            <div className="td transaction_id">131634495747</div>
            <div className="td">12 Jul 2023, 03:00 PM</div>
            <div className="td">₹1,125.00</div>
          </div>
          <div className="divider"></div>
          <div className="tr">
            <div className="td table_order">#281205</div>
            <div className="td">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  style={{ marginRight: "6px" }}
                >
                  <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                </svg>
                Successful
              </div>
            </div>
            <div className="td transaction_id">131634495747</div>
            <div className="td">12 Jul 2023, 03:00 PM</div>
            <div className="td">₹1,125.00</div>
          </div>
          <div className="divider"></div>
          <div className="tr">
            <div className="td table_order">#281204</div>
            <div className="td">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  style={{ marginRight: "6px" }}
                >
                  <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                </svg>
                Successful
              </div>
            </div>
            <div className="td transaction_id">131634495747</div>
            <div className="td">12 Jul 2023, 03:00 PM</div>
            <div className="td">₹1,125.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
