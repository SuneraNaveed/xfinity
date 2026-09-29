import React from "react";
import { ArrowLeft, ArrowRight, Check, Globe, Layers, Smartphone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const packages = [
  {
    number: "01",
    title: "Website",
    intro: "Perfect for establishing your club’s online footprint and showcasing your legacy.",
    price: "10,000",
    icon: <Globe size={23} />,
    features: [
      ["Club Profile", "Highlight your club's history, current board members, and mission."],
      ["Project Portfolio", "Beautifully display high-quality photos and details of past and upcoming community service initiatives."],
      ["Blog & News Section", "Keep your district and community updated on your latest achievements."],
      ["Contact & Join Forms", "Make it effortless for prospective members, partners, and sponsors to reach out."],
      ["Resource Library", "Centralized, on-the-go access to meeting minutes, agendas, and club bylaws."],
    ],
    note: "Excluding domain charges. Requirements can be negotiable.",
  },
  {
    number: "02",
    title: "Mobile App",
    intro: "Designed to keep your members connected and your club operations running smoothly.",
    price: "10,000",
    icon: <Smartphone size={23} />,
    features: [
      ["Club Profile", "Highlight your club's history, current board members, and mission."],
      ["Push Notifications", "Instant updates for meetings, project deadlines, and urgent announcements."],
      ["Blog & News Section", "Keep your district and community updated on your latest achievements."],
      ["Resource Library", "Centralized, on-the-go access to meeting minutes, agendas, and club bylaws."],
    ],
    note: "Excluding Google Play Store and Apple App Store charges. Requirements can be negotiable.",
  },
  {
    number: "03",
    title: "Website & App",
    intro: "The complete digital transformation package for maximum reach and efficiency.",
    price: "15,000",
    icon: <Layers size={23} />,
    featured: true,
    features: [
      ["Seamless Integration", "Get everything from Packages 01 and 02, perfectly synchronized."],
      ["Unified Management", "Update a project on your website and have it instantly reflect on the mobile app."],
      ["Maximum Visibility", "Reach the public and potential sponsors through the web while keeping members engaged on mobile."],
      ["Exclusive Leo Value", "Our most comprehensive package, bundled at a special rate for Leo Club budgets."],
    ],
    note: "Excluding domain, Google Play Store, and Apple App Store charges. Requirements can be negotiable.",
  },
];

export default function Offers() {
  return (
    <PageLayout>
      <main className="offers-page">
        <section className="offers-hero">
          <div className="container offers-hero-inner">
            <Link to="/#whatwedo" className="offers-back-link">
              <ArrowLeft size={15} /> Back to Xfinity Innovations
            </Link>
            <p className="badge">Custom Web &amp; App Solutions · Exclusively for Leos</p>
            <h1 className="offers-title">Elevate Your Leo Club&apos;s Digital Impact!</h1>
            <p className="offers-subtitle">
              Custom Web &amp; App Solutions by Xfinity Innovations &mdash;
              Exclusively for Leos.
            </p>
            <p className="offers-intro">
              We know first-hand what it takes to run successful community
              projects, manage club communications, and keep members engaged.
              That&apos;s why we designed exclusive digital packages to help your
              club stand out, streamline operations, and showcase your community
              impact to the world.
            </p>
          </div>
        </section>

        <section className="container offers-packages" aria-label="Leo Club packages">
          <div className="offers-section-heading">
            <p className="badge">Choose your package</p>
            <h2 className="section-title">Built around your club.</h2>
          </div>
          <div className="offers-package-grid">
            {packages.map((offer) => (
              <article
                className={`offers-package${offer.featured ? " offers-package--featured" : ""}`}
                key={offer.number}
              >
                <div className="offers-package-topline">
                  <span className="offers-package-number">PACKAGE {offer.number}</span>
                  <span className="offers-package-icon" aria-hidden="true">{offer.icon}</span>
                </div>
                <h3 className="offers-package-title">{offer.title}</h3>
                <p className="offers-package-intro">{offer.intro}</p>
                <p className="offers-price">
                  <span>LKR</span> {offer.price}
                </p>
                <ul className="offers-feature-list">
                  {offer.features.map(([title, description]) => (
                    <li key={title}>
                      <Check size={16} aria-hidden="true" />
                      <span><strong>{title}:</strong> {description}</span>
                    </li>
                  ))}
                </ul>
                <p className="offers-package-note">{offer.note}</p>
                <a
                  className="offers-package-cta"
                  href={`https://wa.me/94766338858?text=${encodeURIComponent(`Hi, I'm interested in Package ${offer.number}: ${offer.title} for my Leo Club.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire about this package <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="offers-contact-section">
          <div className="container offers-contact">
            <div>
              <p className="badge">Let&apos;s build something great together</p>
              <h2 className="section-title">Ready to take your club&apos;s digital presence to the next level?</h2>
              <p className="muted">Tell us what your club needs. We&apos;ll help you find the right fit.</p>
            </div>
            <div className="offers-contact-actions">
              <a
                className="btn btn-fill-pill"
                href="https://wa.me/94766338858"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={18} /> WhatsApp +94 766 338 858
              </a>
              <a className="btn btn-outline-pill" href="mailto:innovationsatxfinity@gmail.com">
                Email Us <ArrowRight size={16} />
              </a>
              <span className="offers-email">innovationsatxfinity@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}