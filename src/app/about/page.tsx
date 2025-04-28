"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
export default function AboutPage() {
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const teamMembers = [{
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in AI and machine learning, Sarah founded Amen with a vision to make advanced AI accessible to businesses of all sizes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }, {
    name: "Michael Chen",
    role: "CTO",
    bio: "Michael leads our technical team with expertise in deep learning and natural language processing. He previously worked at leading AI research labs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }, {
    name: "Priya Patel",
    role: "Head of Research",
    bio: "Priya oversees our research initiatives, focusing on developing cutting-edge AI models that push the boundaries of what's possible.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
  }, {
    name: "David Wilson",
    role: "Head of Client Solutions",
    bio: "David works closely with our clients to understand their needs and develop tailored AI solutions that drive real business value.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }];
  return <div className="min-h-screen flex flex-col bg-background" data-unique-id="e28babf7-11c8-4375-96b7-f838c6d9c6ed" data-loc="38:9-38:67" data-file-name="app/about/page.tsx">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border" data-unique-id="31281810-650d-480e-b16b-b9cf3af071fb" data-loc="40:6-40:76" data-file-name="app/about/page.tsx">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center" data-unique-id="2c90d840-109b-47de-9143-75fcfc565143" data-loc="41:8-41:87" data-file-name="app/about/page.tsx">
          <div className="flex items-center" data-unique-id="8a70ac0f-5218-453a-bac5-c87fbfca72a0" data-loc="42:10-42:45" data-file-name="app/about/page.tsx">
            <a href="/" className="text-xl font-bold text-primary md:text-2xl" data-unique-id="0b348ea6-67d2-47e5-8626-f4693f421310" data-loc="43:12-43:79" data-file-name="app/about/page.tsx">Amen</a>
          </div>
          
          <nav className="flex items-center space-x-6" data-unique-id="7192911f-d3b2-46aa-a092-5febcb69726b" data-loc="46:10-46:55" data-file-name="app/about/page.tsx">
            <a href="/" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="59c704b7-ce01-4a2b-ab10-0f12466658ba" data-loc="47:12-47:89" data-file-name="app/about/page.tsx">Home</a>
            <a href="/services" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="79f794cb-3770-4440-822e-548127c82649" data-loc="48:12-48:97" data-file-name="app/about/page.tsx">Services</a>
            <a href="/about" className="text-primary hover:text-primary/80 font-medium" data-unique-id="328679aa-31ab-4683-990e-ffb759d10231" data-loc="49:12-49:88" data-file-name="app/about/page.tsx">About</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="b673c99c-6c6a-462e-8ff0-467c87fec007" data-loc="50:12-50:96" data-file-name="app/about/page.tsx">Contact</a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors" data-unique-id="c6b4f26b-94ed-4b76-b682-925cab838e15" data-loc="51:12-51:126" data-file-name="app/about/page.tsx">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1" data-unique-id="d77849e4-d29c-448a-b665-1e6a440deda6" data-loc="58:6-58:31" data-file-name="app/about/page.tsx">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30" data-unique-id="6a926b9f-f529-4ce1-9985-144e55ec3a43" data-loc="60:8-60:51" data-file-name="app/about/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="0a9c03a6-dc86-4a55-add8-081a49688dbc" data-loc="61:10-61:50" data-file-name="app/about/page.tsx">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-12" data-unique-id="4ac37065-0a8d-4184-bdad-46e630ddf859" data-loc="62:12-62:85" data-file-name="app/about/page.tsx">
              <div className="md:w-1/2 mb-8 md:mb-0" data-unique-id="aba56f85-d626-4a3e-8302-1e3af9683e20" data-loc="63:14-63:53" data-file-name="app/about/page.tsx">
                <motion.h1 initial="hidden" animate="visible" variants={fadeIn} transition={{
                duration: 0.5
              }} className="text-4xl md:text-5xl font-bold text-primary mb-6" data-unique-id="70f6431e-3389-4642-9810-4eb2c1341821" data-loc="64:16-66:78" data-file-name="app/about/page.tsx">
                  Our Story
                </motion.h1>
                <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{
                duration: 0.5,
                delay: 0.2
              }} className="text-muted-foreground text-lg mb-6" data-unique-id="da618099-551a-401c-8fd8-25497f3648b6" data-loc="69:16-72:64" data-file-name="app/about/page.tsx">
                  Founded in 2020, Amen was born from a simple yet powerful vision: to democratize access to advanced AI technologies and help businesses of all sizes harness the transformative power of artificial intelligence. Our NETPUB-compatible solutions ensure seamless integration with your existing infrastructure.
                </motion.p>
                <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{
                duration: 0.5,
                delay: 0.4
              }} className="text-muted-foreground text-lg" data-unique-id="4a3797a2-b43f-45a1-8028-d234992fdabe" data-loc="75:16-78:59" data-file-name="app/about/page.tsx">
                  What started as a small team of passionate AI researchers has grown into a global company serving clients across industries, from startups to Fortune 500 companies.
                </motion.p>
              </div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6
            }} className="md:w-1/2" data-unique-id="61a669e5-e48c-42a2-954e-36a8bc3fb08a" data-loc="82:14-90:36" data-file-name="app/about/page.tsx">
                <div className="rounded-lg overflow-hidden shadow-xl" data-unique-id="4e4a4f82-1dc2-4fb0-8073-996d2d4d0e35" data-loc="91:16-91:70" data-file-name="app/about/page.tsx">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Amen team collaboration" className="w-full h-auto" data-unique-id="b81fb5f5-01d0-47c3-9793-b5873e14467a" data-loc="92:18-92:251" data-file-name="app/about/page.tsx" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16" data-unique-id="386dc95d-6f39-44eb-8d52-2f0e952fc2bd" data-loc="100:8-100:35" data-file-name="app/about/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="9c901893-722f-48ee-b89f-c1659bb48aef" data-loc="101:10-101:50" data-file-name="app/about/page.tsx">
            <div className="text-center mb-12" data-unique-id="d9a6cb06-2986-404d-a4ae-1a92aaa3e3d6" data-loc="102:12-102:47" data-file-name="app/about/page.tsx">
              <h2 className="text-3xl font-bold text-primary mb-4" data-unique-id="8a61807e-4bf4-4ca1-a2a7-51127f828251" data-loc="103:14-103:67" data-file-name="app/about/page.tsx">Our Mission & Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="c818128d-2dbf-497a-a49e-b0c48a36c05c" data-loc="104:14-104:69" data-file-name="app/about/page.tsx">
                We're guided by a set of core principles that inform everything we do, from product development to client relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-unique-id="10f931cd-f701-40eb-be9d-f0234f21c8b6" data-loc="109:12-109:67" data-file-name="app/about/page.tsx">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="bg-white p-8 rounded-lg shadow-md border border-border" data-unique-id="abab21f9-ac18-4b1e-a98d-95def6f4a6fa" data-loc="110:14-120:82" data-file-name="app/about/page.tsx">
                <h3 className="text-2xl font-bold text-primary mb-4" data-unique-id="9a42f6ff-758d-4693-b9da-9eba3897c1d9" data-loc="121:16-121:69" data-file-name="app/about/page.tsx">Our Mission</h3>
                <p className="text-muted-foreground mb-6" data-unique-id="4af56a81-95e3-45d6-9bd7-a113b1dd814b" data-loc="122:16-122:58" data-file-name="app/about/page.tsx">
                  To empower organizations with intelligent AI solutions that drive innovation, efficiency, and growth. We believe that AI should be accessible, understandable, and beneficial to all, with enterprise-grade reliability and NETPUB compatibility at the core of our offerings.
                </p>
                <p className="text-muted-foreground" data-unique-id="27c25342-4590-43d2-ab04-41d16874456c" data-loc="125:16-125:53" data-file-name="app/about/page.tsx">
                  Through continuous research and development, we strive to push the boundaries of what's possible with AI while ensuring our solutions remain practical and impactful for real-world applications.
                </p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="bg-white p-8 rounded-lg shadow-md border border-border" data-unique-id="70a42796-e38f-4839-8a4e-60283febfb3f" data-loc="130:14-141:82" data-file-name="app/about/page.tsx">
                <h3 className="text-2xl font-bold text-primary mb-4" data-unique-id="ed26423b-e4f3-4ec2-8a97-82fae9e03cb7" data-loc="142:16-142:69" data-file-name="app/about/page.tsx">Our Values</h3>
                <ul className="space-y-4" data-unique-id="8ef19374-cd05-4825-b281-f1b49313c728" data-loc="143:16-143:42" data-file-name="app/about/page.tsx">
                  <li className="flex items-start" data-unique-id="d1c00a38-833f-4f41-8608-57eff43c9151" data-loc="144:18-144:51" data-file-name="app/about/page.tsx">
                    <ChevronRight className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <div data-unique-id="2ee9e824-2640-485b-b4e0-5dff9ebdcb31" data-loc="146:20-146:25" data-file-name="app/about/page.tsx">
                      <span className="font-semibold text-primary" data-unique-id="f7aa6ae1-c181-4874-9fbb-b01fede0e8a6" data-loc="147:22-147:67" data-file-name="app/about/page.tsx">Innovation:</span>
                      <p className="text-muted-foreground" data-unique-id="52453e8e-086e-49e1-9f66-9abcd14defd6" data-loc="148:22-148:59" data-file-name="app/about/page.tsx">We constantly explore new ideas and approaches to solve complex problems.</p>
                    </div>
                  </li>
                  <li className="flex items-start" data-unique-id="568e97f7-e123-4661-9ac5-21b054872504" data-loc="151:18-151:51" data-file-name="app/about/page.tsx">
                    <ChevronRight className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <div data-unique-id="9d5d7442-5cce-48f8-bf11-cc194bd6b8be" data-loc="153:20-153:25" data-file-name="app/about/page.tsx">
                      <span className="font-semibold text-primary" data-unique-id="7c63f651-122d-4d92-9f1f-498006e2a427" data-loc="154:22-154:67" data-file-name="app/about/page.tsx">Integrity:</span>
                      <p className="text-muted-foreground" data-unique-id="cbdb98e1-8f3b-4e28-9439-e35b55bf0415" data-loc="155:22-155:59" data-file-name="app/about/page.tsx">We uphold the highest ethical standards in all our work.</p>
                    </div>
                  </li>
                  <li className="flex items-start" data-unique-id="194a3833-657f-429b-ade8-947ba987d1fd" data-loc="158:18-158:51" data-file-name="app/about/page.tsx">
                    <ChevronRight className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <div data-unique-id="bb673049-13d1-40cd-b10e-226bbd84dda9" data-loc="160:20-160:25" data-file-name="app/about/page.tsx">
                      <span className="font-semibold text-primary" data-unique-id="ee1dd2ef-4737-433c-8278-dba8c4856441" data-loc="161:22-161:67" data-file-name="app/about/page.tsx">Collaboration:</span>
                      <p className="text-muted-foreground" data-unique-id="7f01f019-d74d-4e1a-9c01-cf846f607e59" data-loc="162:22-162:59" data-file-name="app/about/page.tsx">We believe in the power of teamwork and partnership.</p>
                    </div>
                  </li>
                  <li className="flex items-start" data-unique-id="f6528f36-c94a-4dd5-ad79-edb6403039e0" data-loc="165:18-165:51" data-file-name="app/about/page.tsx">
                    <ChevronRight className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <div data-unique-id="9b61704a-b3fa-4302-9699-7fc8051f2ba1" data-loc="167:20-167:25" data-file-name="app/about/page.tsx">
                      <span className="font-semibold text-primary" data-unique-id="094ec84e-16db-4ec7-969c-7df9a8a1400e" data-loc="168:22-168:67" data-file-name="app/about/page.tsx">Impact:</span>
                      <p className="text-muted-foreground" data-unique-id="4b12dc0e-3aa4-4dea-afaa-d69e6f755606" data-loc="169:22-169:59" data-file-name="app/about/page.tsx">We measure our success by the value we create for our clients.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-secondary/30" data-unique-id="5fe40625-d4df-45a1-b078-7b54e4eebce2" data-loc="179:8-179:51" data-file-name="app/about/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="bf280fb3-ee22-44ae-8b49-68ab87173809" data-loc="180:10-180:50" data-file-name="app/about/page.tsx">
            <div className="text-center mb-12" data-unique-id="1d7f411a-20b2-4458-91d3-b8cedda7f7dc" data-loc="181:12-181:47" data-file-name="app/about/page.tsx">
              <h2 className="text-3xl font-bold text-primary mb-4" data-unique-id="87aea5e7-1b7d-4b41-af0c-e294c974b6ad" data-loc="182:14-182:67" data-file-name="app/about/page.tsx">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="2112b8e3-67e0-4269-b693-3ea927c2b42f" data-loc="183:14-183:69" data-file-name="app/about/page.tsx">
                Our diverse team of experts brings together decades of experience in AI, machine learning, enterprise integration, and business transformation, with specialized knowledge in NETPUB compatibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-unique-id="51fa5235-2893-4b6f-a14b-57f5d0c0ee70" data-loc="188:12-188:82" data-file-name="app/about/page.tsx">
              {teamMembers.map((member, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg overflow-hidden shadow-md border border-border" data-unique-id="11453d2f-b736-43f5-a64e-b1fa298ed054" data-loc="189:50-200:94" data-file-name="app/about/page.tsx">
                  <div className="h-64 overflow-hidden" data-unique-id="b6fad5bb-38b0-446e-a54a-5681e0e47e00" data-loc="201:18-201:56" data-file-name="app/about/page.tsx">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" data-unique-id="e89e8f6f-f0c0-40a9-ac05-bffc45d39ba4" data-loc="202:20-202:103" data-file-name="app/about/page.tsx" />
                  </div>
                  <div className="p-6" data-unique-id="0ffb4ca1-ee7d-4706-b8d6-df9633db9395" data-loc="204:18-204:39" data-file-name="app/about/page.tsx">
                    <h3 className="text-xl font-semibold text-primary" data-unique-id="3932f5c7-ebae-48ca-966a-c8406d829dc1" data-loc="205:20-205:71" data-file-name="app/about/page.tsx">{member.name}</h3>
                    <p className="text-primary/70 font-medium mb-3" data-unique-id="7d96e6cf-fd3d-470e-b930-304b446728f4" data-loc="206:20-206:68" data-file-name="app/about/page.tsx">{member.role}</p>
                    <p className="text-muted-foreground" data-unique-id="b0b6ab01-abd8-4d76-a4e9-89d8f36cf492" data-loc="207:20-207:57" data-file-name="app/about/page.tsx">{member.bio}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground" data-unique-id="d94bc5d5-3f26-473a-95cd-8e016928edd6" data-loc="215:8-215:70" data-file-name="app/about/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="c27ed788-1797-46d1-af2a-adacf8bf61f6" data-loc="216:10-216:50" data-file-name="app/about/page.tsx">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" data-unique-id="6c1b782e-3434-40bc-a2d9-aec68d487ec5" data-loc="217:12-217:90" data-file-name="app/about/page.tsx">
              <div className="mb-6 md:mb-0 md:w-2/3" data-unique-id="0058bfef-525e-4852-acdd-eba1e19455bb" data-loc="218:14-218:53" data-file-name="app/about/page.tsx">
                <h2 className="text-2xl md:text-4xl font-bold mb-4" data-unique-id="d5c9d55f-7bc1-4ce6-895a-a3ef81ce747b" data-loc="219:16-219:68" data-file-name="app/about/page.tsx">Ready to work with us?</h2>
                <p className="text-primary-foreground/80 text-lg" data-unique-id="6fb59a2d-50f7-4181-979b-b06eb7a28d75" data-loc="220:16-220:66" data-file-name="app/about/page.tsx">
                  Let's discuss how our AI solutions can help your business thrive in the digital age.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-start md:justify-end" data-unique-id="bcc771fc-ccbf-4f86-837b-a3c4c57dc305" data-loc="224:14-224:74" data-file-name="app/about/page.tsx">
                <a href="/contact" className="bg-white text-primary px-6 py-3 rounded-md hover:bg-white/90 transition-colors font-medium inline-block" data-unique-id="1c60d917-19c0-474e-9d93-f4dc21e29076" data-loc="225:16-225:151" data-file-name="app/about/page.tsx">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-8" data-unique-id="83430de9-2080-46fb-8874-3a806ebb6223" data-loc="234:6-234:44" data-file-name="app/about/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="87affa47-5aa1-4609-89dd-1fef87561975" data-loc="235:8-235:48" data-file-name="app/about/page.tsx">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-unique-id="9771ab19-65e4-4037-9ad2-6cf14a65b005" data-loc="236:10-236:65" data-file-name="app/about/page.tsx">
            <div data-unique-id="4f694685-bf4c-41f8-b97d-5ecc8723571c" data-loc="237:12-237:17" data-file-name="app/about/page.tsx">
              <h3 className="text-lg font-bold text-primary mb-4" data-unique-id="4051aa93-3f58-441d-8a43-b61f8dbd2270" data-loc="238:14-238:66" data-file-name="app/about/page.tsx">Amen</h3>
              <p className="text-muted-foreground" data-unique-id="18e46688-3f45-42f6-8710-5e69cb69477f" data-loc="239:14-239:51" data-file-name="app/about/page.tsx">
                Providing intelligent AI solutions for businesses of all sizes.
              </p>
            </div>
            <div data-unique-id="f5c10418-3a24-4c95-a7d0-b5483092bbc1" data-loc="243:12-243:17" data-file-name="app/about/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="1183af1e-c18c-4dfa-8f58-e0b2d1adf47f" data-loc="244:14-244:60" data-file-name="app/about/page.tsx">Services</h4>
              <ul className="space-y-2" data-unique-id="fcd88f0f-8bb0-4a23-825a-e3c11b0cdfbd" data-loc="245:14-245:40" data-file-name="app/about/page.tsx">
                <li data-unique-id="a16a3cc3-d7d0-4f33-b2aa-7ed713e016d5" data-loc="246:16-246:20" data-file-name="app/about/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="de79175a-dbb7-40d5-880e-6da644b25adb" data-loc="246:20-246:93" data-file-name="app/about/page.tsx">Natural Language Processing</a></li>
                <li data-unique-id="fdb2c489-6b9a-4a92-bc1c-38596bb56a85" data-loc="247:16-247:20" data-file-name="app/about/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="d355f8b4-a21c-4bda-85f5-63d43ca48765" data-loc="247:20-247:93" data-file-name="app/about/page.tsx">Computer Vision</a></li>
                <li data-unique-id="7f9348d0-36e4-49ef-b419-249e807fa36c" data-loc="248:16-248:20" data-file-name="app/about/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="190d5458-c409-46d3-824d-6dfab9f13d17" data-loc="248:20-248:93" data-file-name="app/about/page.tsx">Predictive Analytics</a></li>
                <li data-unique-id="3974dbc4-b054-4dd0-a31f-f3341774fc92" data-loc="249:16-249:20" data-file-name="app/about/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="48a97f1f-ca04-4837-a43e-67416cd3f5d1" data-loc="249:20-249:93" data-file-name="app/about/page.tsx">Custom AI Solutions</a></li>
              </ul>
            </div>
            <div data-unique-id="00481f0c-09b5-4226-86b1-7c2cc8b416cd" data-loc="252:12-252:17" data-file-name="app/about/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="712fe8f9-8fbf-4176-91dc-48eff38c728e" data-loc="253:14-253:60" data-file-name="app/about/page.tsx">Company</h4>
              <ul className="space-y-2" data-unique-id="8dc06040-34b0-472a-893c-e8962f0c6326" data-loc="254:14-254:40" data-file-name="app/about/page.tsx">
                <li data-unique-id="a398e314-7cd1-4496-9c63-d509c50b2a7d" data-loc="255:16-255:20" data-file-name="app/about/page.tsx"><a href="/about" className="text-muted-foreground hover:text-primary" data-unique-id="656f455e-737d-4de2-903b-800c090ec37c" data-loc="255:20-255:90" data-file-name="app/about/page.tsx">About Us</a></li>
                <li data-unique-id="b93be09f-8931-4d25-87f6-7271694c9ddb" data-loc="256:16-256:20" data-file-name="app/about/page.tsx"><a href="/about" className="text-muted-foreground hover:text-primary" data-unique-id="cb1e729f-147d-4911-b997-2b539a390a10" data-loc="256:20-256:90" data-file-name="app/about/page.tsx">Careers</a></li>
                <li data-unique-id="f1d4590c-e95d-45f6-8495-bd267d10d546" data-loc="257:16-257:20" data-file-name="app/about/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="119bf4b6-52ad-47f9-a291-090574b3a165" data-loc="257:20-257:85" data-file-name="app/about/page.tsx">Blog</a></li>
                <li data-unique-id="da24710f-5400-4359-9df7-93aa565ca9e0" data-loc="258:16-258:20" data-file-name="app/about/page.tsx"><a href="/contact" className="text-muted-foreground hover:text-primary" data-unique-id="036d2a7a-95d1-4fc7-8bd8-66f6ff68d963" data-loc="258:20-258:92" data-file-name="app/about/page.tsx">Contact</a></li>
              </ul>
            </div>
            <div data-unique-id="6f8a3ca0-3dec-4fe6-9923-2ef1434b2752" data-loc="261:12-261:17" data-file-name="app/about/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="031feb98-cf79-4e0f-bd8c-52b670e24f08" data-loc="262:14-262:60" data-file-name="app/about/page.tsx">Legal</h4>
              <ul className="space-y-2" data-unique-id="2a47e753-e47d-4f93-99c4-57d1761358e6" data-loc="263:14-263:40" data-file-name="app/about/page.tsx">
                <li data-unique-id="25cc4ed0-17fd-493b-8ba3-cb0196f89204" data-loc="264:16-264:20" data-file-name="app/about/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="0a0eaa38-9b42-4a1e-81cb-0b95608fca00" data-loc="264:20-264:85" data-file-name="app/about/page.tsx">Privacy Policy</a></li>
                <li data-unique-id="76cfd490-91c5-4120-a928-67bdd09a17e7" data-loc="265:16-265:20" data-file-name="app/about/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="1d6a17e9-7d58-43cb-b675-9dd163ea091a" data-loc="265:20-265:85" data-file-name="app/about/page.tsx">Terms of Service</a></li>
                <li data-unique-id="45c8cd92-48f4-44c0-ad43-443a9f79ad52" data-loc="266:16-266:20" data-file-name="app/about/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="c0f6853e-42d8-4d0c-bcda-e7eedc0b9971" data-loc="266:20-266:85" data-file-name="app/about/page.tsx">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center" data-unique-id="b589d235-15d9-4145-810f-5fa9a6c32c5a" data-loc="270:10-270:72" data-file-name="app/about/page.tsx">
            <div className="flex justify-center items-center mb-4" data-unique-id="6c00e239-6ee5-4ecd-9894-246a2f78bcdc" data-loc="271:12-271:67" data-file-name="app/about/page.tsx">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-flex items-center" data-unique-id="f213de4b-990c-4778-be42-4d9f9cde90d6" data-loc="272:14-272:126" data-file-name="app/about/page.tsx">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" data-unique-id="37ead807-2a64-4626-a592-2ce909f02104" data-loc="273:16-273:211" data-file-name="app/about/page.tsx">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                NETPUB Compatible
              </div>
            </div>
            <p className="text-muted-foreground" data-unique-id="8650ee2e-d280-4570-8fdb-6e04321a6d63" data-loc="280:12-280:49" data-file-name="app/about/page.tsx">&copy; {new Date().getFullYear()} Amen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}