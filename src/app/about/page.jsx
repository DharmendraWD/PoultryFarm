import AboutUs from "./About";

import styles from "../../css/aboutPage.module.css";
import {
  FaEgg,
  FaLeaf,
  FaUserShield,
  FaBox,
  FaTruck,
} from "react-icons/fa";

export default function Page() {

const steps = [
  {
    icon: <FaEgg />,
    title: "Healthy Chicks Raised",
    desc: "We start with high-quality chicks raised in a safe environment.",
  },
  {
    icon: <FaLeaf />,
    title: "Nutritious Feeding",
    desc: "Balanced natural feed for healthy and strong growth.",
  },
  {
    icon: <FaUserShield />,
    title: "Hygienic Processing",
    desc: "Clean, safe, and fully hygienic processing standards.",
  },
  {
    icon: <FaBox />,
    title: "Fresh Packaging",
    desc: "Carefully packed to maintain freshness and quality.",
  },
  // {
  //   icon: <FaTruck />,
  //   title: "Same-Day Delivery",
  //   desc: "Fast delivery across Kathmandu and nearby areas.",
  // },
];


  return (
      <>
      <AboutUs />

    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.centerHeader}>
          <p className={styles.tag}>Our Process</p>

          <h2 className={styles.title}>
            From Farm to Table — Simple & Transparent
          </h2>

          <p className={styles.subtitle}>
            We believe in complete transparency so you know exactly how your chicken is raised and delivered.
          </p>
        </div>

        {/* STEPS */}
        <div className={styles.processGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.processCard}>
              <div className={styles.stepNumber}>
                {index + 1}
              </div>

              <div className={styles.stepIcon}>
                {step.icon}
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      </>
  );
}
