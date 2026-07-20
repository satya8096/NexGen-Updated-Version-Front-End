import React from "react";
import "./PricingOfferCard.css";
import { Link } from "react-router-dom";
import { phoneNumber } from "../../Data/BrandData";

const PricingOfferCard = ({
  pricesData,
  countDown,
  formatPriceFunc,
  priceCardTitle,
  pricingBadge,
}) => {
  return (
    <section className="nxgPriceCardWrapp">
      <div className="nxgPriceGlowOne"></div>
      <div className="nxgPriceGlowTwo"></div>

      {/* ================================================================== */}
      <div className="nxgPriceCard">
        <span className="nxgPriceBorder"></span>

        <span className="nxgPriceShine"></span>

        <div className="nxgPriceTopBadge">
          <span className="nxgPriceBadgePulse"></span>

          <span>{pricingBadge}</span>
        </div>

        <div className="nxgPriceSaleWrapper">
          <div className="nxgPriceLive">
            <span className="nxgPriceLiveDot"></span>
            LIVE
          </div>
        </div>
        <p>{pricesData.description}</p>

        <div className="nxgPriceDiscount">
          🔥{pricesData.discountPercentage} % OFF
        </div>

        <h3 className="nxgPriceTitle">{priceCardTitle}</h3>
        <div>
          <div>
            {pricesData.type === "normal" && (
              <>
                <div>₹{formatPriceFunc(pricesData.finalPrice)}</div>
                <div className="nxgPriceSavings">You Save ₹ 0</div>
              </>
            )}
          </div>

          {pricesData.type === "offer" && (
            <>
              <div className="nxgPriceOldPrice">
                {formatPriceFunc(pricesData.actualPrice)}
              </div>

              <div className="nxgPriceCurrentPrice">
                {formatPriceFunc(pricesData.finalPrice)}
              </div>

              <div className="nxgPriceSavings">
                You Save{" "}
                {formatPriceFunc(
                  pricesData.actualPrice - pricesData.finalPrice,
                )}
              </div>
            </>
          )}

          {pricesData.type === "extraOffer" && (
            <>
              <div className="nxgPriceOldPrice">
                {formatPriceFunc(pricesData.actualPrice)}
              </div>

              <div className="nxgPriceOldPrice">
                {formatPriceFunc(pricesData.offerPrice)}
              </div>

              <div className="nxgPriceCurrentPrice ">
                {formatPriceFunc(pricesData.finalPrice)}
              </div>
              <div className="nxgPriceSavings">
                You Save{" "}
                {formatPriceFunc(
                  pricesData.actualPrice - pricesData.finalPrice,
                )}
              </div>
            </>
          )}
        </div>

        {/* Divider */}

        <div className="nxgPriceDivider"></div>

        {/* Countdown */}

        <div className="nxgPriceOfferTitle">Limited Time Offer Ends In</div>

        {pricesData.type === "extraOffer" && (
          <div className="nxgPriceCountdown">
            <div className="nxgPriceTimeBox">
              <h2>{countDown.days}</h2>

              <p>Days</p>
            </div>

            <div className="nxgPriceColon">:</div>

            <div className="nxgPriceTimeBox">
              <h2>{countDown.hours}</h2>

              <p>Hours</p>
            </div>

            <div className="nxgPriceColon">:</div>

            <div className="nxgPriceTimeBox">
              <h2>{countDown.minutes}</h2>

              <p>Min</p>
            </div>

            <div className="nxgPriceColon">:</div>

            <div className="nxgPriceTimeBox">
              <h2>{countDown.seconds}</h2>

              <p>Sec</p>
            </div>
          </div>
        )}

        {/* Expired */}

        {pricesData.type !== "extraOffer" && (
          <div className="nxgPriceExpired">Offer Expired</div>
        )}

        {/* Button */}

        <Link to={`tel:${phoneNumber}`} className="nxgPriceButton">
          <div>Choose Plan</div>

          <svg
            className="nxgPriceArrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12H19"></path>

            <path d="M13 6L19 12L13 18"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default PricingOfferCard;
