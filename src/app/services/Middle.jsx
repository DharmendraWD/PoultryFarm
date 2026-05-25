"use client";
import img2 from '../../../public/owned/adultHen2.png';

import Image from "next/image";
import {
  FaTruck,
  FaStore,
  FaHotel,
  FaUtensils,
  FaCheckCircle,
  FaLeaf,
  FaShippingFast,
  FaDrumstickBite,
} from "react-icons/fa";

import {
  MdRestaurant,
  MdHealthAndSafety,
} from "react-icons/md";

import styles from "../../css/service.module.css";

const wholesaleClients = [
  {
    title: "Restaurants",
    icon: <MdRestaurant />,
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Hotels",
    icon: <FaHotel />,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Meat Shops",
    icon: <FaStore />,
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Caterers",
    icon: <FaUtensils />,
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
  },
];

const chickenTypes = [
  "Broiler Chicken",
  "Local Chicken",
  "Live Chicken",
  "Fresh Dressed Chicken",
  "Whole Chicken & Cuts",
];

const whyChooseUs = [
  {
    title: "Fresh & Hygienic",
    icon: <MdHealthAndSafety />,
  },
  {
    title: "Healthy Farm-Raised Chickens",
    icon: <FaLeaf />,
  },
  {
    title: "Affordable Prices",
    icon: <FaCheckCircle />,
  },
  {
    title: "Fast Delivery",
    icon: <FaShippingFast />,
  },
  {
    title: "Quality Feed",
    icon: <FaDrumstickBite />,
  },
  {
    title: "Trusted Local Farm",
    icon: <FaTruck />,
  },
];

export default function ServicesMidSection() {
  return (
    <section className={styles.servicesSection}>
      {/* WHOLESALE SECTION */}

      <div className={styles.sectionPadding}>
        <div className={styles.wholesaleGrid}>
          {/* LEFT CONTENT */}

          <div>
            <p className={styles.sectionTag}>
              Bulk Chicken Supply
            </p>

            <h2 className={styles.sectionTitle}>
              Wholesale & Bulk Orders
            </h2>

            <p className={styles.sectionDescription}>
              We supply premium quality chicken in bulk quantities for
              restaurants, hotels, meat shops, caterers, and retail stores.
              Our farm ensures freshness, hygiene, and timely delivery every
              single day.
            </p>

            {/* BENEFITS */}

            <div className={styles.benefitsList}>
              {[
                "Consistent Supply",
                "Competitive Pricing",
                "Timely Delivery",
              ].map((item, index) => (
                <div
                  key={index}
                  className={styles.benefitItem}
                >
                  <div className={styles.benefitIcon}>
                    <FaCheckCircle />
                  </div>

                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT GRID */}

          <div className={styles.clientsGrid}>
            {wholesaleClients.map((item, index) => (
              <div
                key={index}
                className={styles.clientCard}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.clientImage}
                />

                <div className={styles.clientOverlay} />

                <div className={styles.clientContent}>
                  <div className={styles.clientIcon}>
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FRESH CHICKEN SECTION */}

      <div className={styles.freshSection}>
        <div className={styles.freshGrid}>
          {/* IMAGE */}

          <div className={styles.freshImageWrapper}>
            <Image
              src={img2}
              alt="Fresh Chicken"
              fill
              className={styles.freshImage}
            />

            <div className={styles.freshOverlay} />

            <div className={styles.freshContent}>
              <h3>Fresh Chicken Supply</h3>

              <p>
                Healthy farm-raised chickens processed hygienically
                for better taste and nutrition.
              </p>
            </div>
          </div>

          {/* CONTENT */}

          <div>
            <p className={styles.sectionTag}>
              Farm Fresh Quality
            </p>

            <h2 className={styles.sectionTitle}>
              Fresh Chicken Sales
            </h2>

            <p className={styles.sectionDescription}>
              We provide fresh, healthy, and properly processed chicken directly
              from our poultry farm.
            </p>

            {/* CHICKEN TYPES */}

            <div className={styles.chickenGrid}>
              {chickenTypes.map((item, index) => (
                <div
                  key={index}
                  className={styles.chickenCard}
                >
                  <div className={styles.chickenIcon}>
                    <FaDrumstickBite />
                  </div>

                  <h4>{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}

      <div className={styles.whySection}>
        <div className={styles.whyHeader}>
          <p className={styles.sectionTag}>
            Why Customers Trust Us
          </p>

          <h2 className={styles.sectionTitle}>
            Why Choose Our Poultry Farm
          </h2>
        </div>

        {/* CARDS */}

        <div className={styles.whyGrid}>
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={styles.whyCard}
            >
              <div className={styles.whyGlow} />

              <div className={styles.whyIcon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>
                We maintain high-quality poultry farming standards with fresh
                supply, hygienic processing, and customer-first service.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}