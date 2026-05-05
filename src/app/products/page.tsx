import Image from "next/image";
import Link from "next/link";
import {
  productCategories,
  productPartners,
  productStats,
} from "@/data/productsData";

export default function ProductsPage() {
  return (
    <>
      <section className="products-hero">
        <div className="container products-hero__inner">
          <div className="products-hero__content">
            <p className="products-hero__eyebrow">Product Directory</p>
            <h1 className="products-hero__title">
              Industry-Leading Global Data Solutions
            </h1>
            <p className="products-hero__sub">
              From flagging the risk of fraud to validating if an address is
              deliverable by the USPS, our solutions start by ensuring your
              global contact data is genuine, accurate and up-to-date.
            </p>
            <Link href="/contact-us" className="btn btn--primary">
              Talk to an expert
            </Link>
          </div>
          <div className="products-hero__image">
            <Image
              src="/images/products/hero-product-directory.png"
              alt="Product Directory"
              width={520}
              height={420}
              priority
            />
          </div>
        </div>
      </section>

      <section className="products section">
        <div className="containerProducts">
          <div className="section-header--center">
            <h2 className="section__title">
              Our Global Data Validation Services
            </h2>
            <p className="section__sub">
              We focus exclusively on global contact and customer data
              verification while constantly evolving to meet our customers&apos;
              needs and support new technologies.
            </p>
          </div>

          <div className="products-stats">
            {productStats.map((stat) => (
              <article key={stat.label} className="products-stats__card">
                <div className="products-stats__icon">
                  <Image
                    src={stat.src}
                    alt=""
                    width={58}
                    height={58}
                    aria-hidden="true"
                  />
                </div>
                <p className="products-stats__value">{stat.value}</p>
                <p className="products-stats__label">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="products-grid">
            {productCategories.map((category, index) => (
              <article
                key={category.id}
                id={category.id}
                className={`products-row${
                  index % 2 === 1 ? " products-row--reverse" : ""
                }`}
              >
                <div
                  className={`container products-row ${index % 2 === 1 ? " products-row--reverse" : ""}`}
                >
                  <div className="products-row__image-wrap">
                    <Image
                      src={category.src}
                      alt={category.title}
                      width={250}
                      height={250}
                      className="products-row__image"
                    />
                  </div>
                  <div className="products-row__content">
                    <h3 className="products-row__title">{category.title}</h3>
                    <p className="products-row__desc">{category.description}</p>
                    <ul className="products-row__list">
                      {category.items.map((item) => (
                        <li key={item.label}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-contact section section--alt">
        <div className="container">
          <div className="products-contact__top">
            <h2 className="section__title">Questions about our products?</h2>
            <p className="section__sub">
              Talk to our data quality experts. Give us a call at{" "}
              <a href="tel:+18006946269">1-800-694-6269</a>.
            </p>
            <Link href="/contact-us" className="btn btn--outline">
              Contact Us
            </Link>
          </div>

          <div className="products-partners">
            <p className="products-partners__title">Our Trusted Partners</p>
            <div className="products-partners__logos">
              {productPartners.map((partner) => (
                <Image
                  key={partner.alt}
                  src={partner.src}
                  alt={partner.alt}
                  width={110}
                  height={44}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
