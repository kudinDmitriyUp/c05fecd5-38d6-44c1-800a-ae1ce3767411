"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, Crown, Heart, Mail, Package, Sparkles, Star, TrendingUp } from "lucide-react";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Bellissima"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Embrace Your Feminine Power"
          description="Discover our exclusive collection of premium lingerie designed to make you feel confident, beautiful, and empowered every day"
          tag="New Collection"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/gbabf1c6405d421a26a8afe166bf35b7369def9c741e4bd7e7ba0fe4c41c7d0a9ff7981eb03c90c7976cc12bf4b27a2e7495834889314bd120dcfdd9327833463_1280.jpg",
              imageAlt: "Elegant lingerie collection"
            },
            {
              imageSrc: "https://pixabay.com/get/g2ecbd8afd70c472e7c3fb5cbad42681c0592a826b804f6420832c1c982457aec7b74b58a7d49bd8a996e81e64a35aebce5eed64553a3f9aad90f0f983efa40e4_1280.jpg",
              imageAlt: "Luxury lace bralette"
            },
            {
              imageSrc: "https://pixabay.com/get/g221253af627ae690b0be89b6c1c7ef081ae319964b7f09abf62e06c681fd92bbd864bd3620ea6dd024888a10c4244210c45f4d4783c90b6cf0561e8ba53b4acc_1280.jpg",
              imageAlt: "Silk nightwear"
            },
            {
              imageSrc: "https://pixabay.com/get/g22c8968c42b044d02c19b29e6dc97fa380c43957ae44bce0b7c6a95e5a6d1bb7b5db51dff225a528633f1a446762b6c10d998fe1ac852e61857585d18baca431_1280.jpg",
              imageAlt: "Comfortable everyday lingerie"
            }
          ]}
          buttons={[
            {
              text: "Shop Collection",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded with a vision to celebrate every woman's unique beauty, Bellissima creates lingerie that combines elegance with comfort.",
            "We believe that the right lingerie is more than just an undergarment - it's a source of confidence, empowerment, and self-expression."
          ]}
          buttons={[
            {
              text: "Discover More",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Why Choose Bellissima"
          description="Experience the perfect blend of luxury, comfort, and style"
          tag="Premium Quality"
          tagIcon={Award}
          features={[
            {
              id: "01",
              title: "Premium Materials",
              description: "Crafted from the finest silk, lace, and cotton fabrics sourced from renowned textile manufacturers worldwide",
              imageSrc: "https://pixabay.com/get/g7a1a732e3e3777830a409aa16bbfe7d506843ab9f3d6c889ed592c3a636054139246162fa76351058595737149d1eddbb9f303f57ce57a078bf8c50ddcaf0be9_1280.jpg",
              imageAlt: "Premium quality fabrics"
            },
            {
              id: "02",
              title: "Perfect Fit",
              description: "Our expert sizing system ensures every piece fits beautifully, with custom adjustments available for the perfect silhouette",
              imageSrc: "https://pixabay.com/get/g216c03afa0ab971660a053ed80c2eade5617e68b85c95c3944624dfddc592c05dee18c1eb0b2ffa64126adf23e501d0bb9b4e597b4e61335749b56c00e3208ce_1280.jpg",
              imageAlt: "Perfect fit guarantee"
            },
            {
              id: "03",
              title: "Elegant Design",
              description: "Each piece is thoughtfully designed by our team of fashion experts to celebrate your natural beauty and enhance your confidence",
              imageSrc: "https://pixabay.com/get/g89fb8f035ac2c8bd9065a0a79b590b5444d7574017993dd864a19eda2592fc89bf3a77401ce9c08eb5c96f934cb0778ed909704f5e280a7b2aa4747b947c96ea_1280.jpg",
              imageAlt: "Elegant design craftsmanship"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Collections"
          description="Explore our curated selection of premium lingerie pieces"
          tag="Bestsellers"
          tagIcon={Heart}
          products={[
            {
              id: "1",
              name: "Luxe Lace Bralette Set",
              price: "$128",
              imageSrc: "https://pixabay.com/get/g2ecbd8afd70c472e7c3fb5cbad42681c0592a826b804f6420832c1c982457aec7b74b58a7d49bd8a996e81e64a35aebce5eed64553a3f9aad90f0f983efa40e4_1280.jpg",
              imageAlt: "Luxury lace bralette set"
            },
            {
              id: "2",
              name: "Silk Nightwear Collection",
              price: "$185",
              imageSrc: "https://pixabay.com/get/g221253af627ae690b0be89b6c1c7ef081ae319964b7f09abf62e06c681fd92bbd864bd3620ea6dd024888a10c4244210c45f4d4783c90b6cf0561e8ba53b4acc_1280.jpg",
              imageAlt: "Silk satin nightwear"
            },
            {
              id: "3",
              name: "Everyday Comfort Set",
              price: "$89",
              imageSrc: "https://pixabay.com/get/g22c8968c42b044d02c19b29e6dc97fa380c43957ae44bce0b7c6a95e5a6d1bb7b5db51dff225a528633f1a446762b6c10d998fe1ac852e61857585d18baca431_1280.jpg",
              imageAlt: "Comfortable cotton lingerie"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Style"
          description="Select the perfect collection that matches your lifestyle"
          tag="Collections"
          tagIcon={Package}
          plans={[
            {
              id: "essential",
              badge: "Starter",
              badgeIcon: Heart,
              price: "$89",
              subtitle: "Perfect for everyday comfort",
              features: [
                "2 comfortable bralettes",
                "2 matching panties",
                "Premium cotton blend",
                "30-day satisfaction guarantee"
              ]
            },
            {
              id: "luxury",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$185",
              subtitle: "For special occasions",
              features: [
                "3 silk & lace pieces",
                "Matching sleepwear set",
                "Custom fit consultation",
                "Premium gift packaging",
                "90-day exchange policy"
              ]
            },
            {
              id: "premium",
              badge: "Exclusive",
              badgeIcon: Crown,
              price: "$295",
              subtitle: "Ultimate luxury experience",
              features: [
                "5-piece complete collection",
                "Personal styling session",
                "Exclusive designer pieces",
                "White glove delivery",
                "Lifetime fit guarantee"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Trusted by Women Worldwide"
          description="Join thousands of confident women who choose Bellissima"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "25K+",
              description: "Happy Customers"
            },
            {
              id: "2",
              value: "98%",
              description: "Satisfaction Rate"
            },
            {
              id: "3",
              value: "50+",
              description: "Countries Served"
            },
            {
              id: "4",
              value: "15K+",
              description: "Perfect Fit Reviews"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real stories from women who love our lingerie"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Fashion Blogger",
              testimonial: "The quality is absolutely incredible. The lace detail and comfort level exceeded all my expectations. I feel so confident wearing Bellissima.",
              imageSrc: "https://pixabay.com/get/g90d6ae786f7076b4e8359f8c3aa63735c18910384d22d48352c42faa4b5ab30d6661e50f88ae6b71411870063fbba2bd05e1df378d120ac85379e57a82f32f52_1280.jpg",
              imageAlt: "Sarah Mitchell testimonial"
            },
            {
              id: "2",
              name: "Emma Rodriguez",
              role: "Business Executive",
              testimonial: "Finally found lingerie that fits perfectly and looks elegant. The customer service was exceptional and the fit consultation was so helpful.",
              imageSrc: "https://pixabay.com/get/g3c50d662ee5012e9a5651102a47b4a1e89537809536a60ffea621042d1876e6ee3a8cfc097fe657e9e4d367fea19c5459a7649b3e17e4d12a69d6b455f2a2fa2_1280.jpg",
              imageAlt: "Emma Rodriguez testimonial"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Wellness Coach",
              testimonial: "I love how these pieces make me feel - beautiful, comfortable, and empowered. The silk collection is absolutely divine.",
              imageSrc: "https://pixabay.com/get/g02e59b5b0b0c9311aaeab194d8ccb343bf4fc602a7bac51dc4a3408d89ed5e6a1f4859ac5a038de691e1218fbee272ac14a57fb6da773a3b683dd5aeaafadae3_1280.jpg",
              imageAlt: "Lisa Thompson testimonial"
            },
            {
              id: "4",
              name: "Maria Santos",
              role: "Creative Director",
              testimonial: "The attention to detail in every piece is remarkable. From the packaging to the fit, everything about Bellissima is luxurious.",
              imageSrc: "https://pixabay.com/get/g30b480f18d5c4858afa22a7c58f405b10a294fa18e2ec11c1722e7db5af5b67c0cae8b0ad79254a273efec6d7d83633f5461d6fa336e18bd75c13aa98fa22ad1_1280.jpg",
              imageAlt: "Maria Santos testimonial"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay in Touch"
          description="Be the first to know about new collections, exclusive offers, and styling tips delivered to your inbox"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates from Bellissima. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Bellissima"
          columns={[
            {
              title: "Shop",
              items: [
                {
                  label: "New Arrivals",
                  href: "new-arrivals"
                },
                {
                  label: "Bralettes",
                  href: "bralettes"
                },
                {
                  label: "Panties",
                  href: "panties"
                },
                {
                  label: "Sleepwear",
                  href: "sleepwear"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Size Guide",
                  href: "size-guide"
                },
                {
                  label: "Fit Consultation",
                  href: "fit-consultation"
                },
                {
                  label: "Returns & Exchanges",
                  href: "returns"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "story"
                },
                {
                  label: "Sustainability",
                  href: "sustainability"
                },
                {
                  label: "Careers",
                  href: "careers"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Bellissima Lingerie"
        />
      </div>
    </ThemeProvider>
  );
}