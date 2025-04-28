"use client";

import { motion } from "framer-motion";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
export default function ServicesPage() {
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
  const services = [{
    title: "Natural Language Processing",
    description: "Our NLP solutions enable machines to understand, interpret, and generate human language with remarkable accuracy.",
    icon: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: ["Advanced text analysis and sentiment detection", "Automated content generation and summarization", "Multilingual support for global applications", "Custom chatbots and virtual assistants"]
  }, {
    title: "Computer Vision",
    description: "Our computer vision technology allows machines to interpret and make decisions based on visual data from the world around them.",
    icon: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    features: ["Object detection and recognition", "Facial recognition and emotion analysis", "Image classification and segmentation", "Video analysis and surveillance solutions"]
  }, {
    title: "Predictive Analytics",
    description: "Our predictive analytics solutions help businesses forecast trends, identify opportunities, and make data-driven decisions.",
    icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: ["Advanced forecasting models", "Customer behavior prediction", "Risk assessment and management", "Demand planning and inventory optimization"]
  }, {
    title: "Custom AI Solutions",
    description: "We develop tailored AI solutions designed to address your specific business challenges and opportunities.",
    icon: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: ["End-to-end AI solution development", "Integration with existing systems", "Scalable architecture for growing businesses", "Ongoing support and optimization"]
  }];
  const caseStudies = [{
    title: "Retail Inventory Optimization",
    client: "Global Retail Chain",
    description: "Implemented a predictive analytics solution that reduced inventory costs by 23% while improving product availability.",
    image: "https://picsum.photos/200"
  }, {
    title: "Automated Customer Support",
    client: "Tech Startup",
    description: "Developed an AI-powered chatbot that handles 78% of customer inquiries, reducing response time from hours to seconds.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1666&q=80"
  }, {
    title: "Visual Quality Control",
    client: "Manufacturing Company",
    description: "Implemented a computer vision system that improved defect detection accuracy by 94%, significantly reducing waste and returns.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }];
  return <div className="min-h-screen flex flex-col bg-background" data-unique-id="7fd55ba2-9fef-435f-81a0-0d3aa456dc1e" data-loc="54:9-54:67" data-file-name="app/services/page.tsx">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border" data-unique-id="75244053-7a0a-4ee9-a00e-ab9877c1f9c9" data-loc="56:6-56:76" data-file-name="app/services/page.tsx">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center" data-unique-id="b6c1cbda-03c4-4adc-97fe-7273f722ce66" data-loc="57:8-57:87" data-file-name="app/services/page.tsx">
          <div className="flex items-center" data-unique-id="162d73ee-72cf-4c30-9d7a-d37e672e7c43" data-loc="58:10-58:45" data-file-name="app/services/page.tsx">
            <a href="/" className="text-xl font-bold text-primary md:text-2xl" data-unique-id="f499d0b7-9157-4759-be50-42a0ebb40cc7" data-loc="59:12-59:79" data-file-name="app/services/page.tsx">Amen</a>
          </div>
          
          <nav className="flex items-center space-x-6" data-unique-id="06edc537-c5af-4a61-9a66-9982fade0b6d" data-loc="62:10-62:55" data-file-name="app/services/page.tsx">
            <a href="/" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="ab4afd05-0d38-419f-9cf9-7a41f9b91d2a" data-loc="63:12-63:89" data-file-name="app/services/page.tsx">Home</a>
            <a href="/services" className="text-primary hover:text-primary/80 font-medium" data-unique-id="ff65ac77-41fc-4e6e-ab02-e0b0d13c4758" data-loc="64:12-64:91" data-file-name="app/services/page.tsx">Services</a>
            <a href="/about" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="852c9a9a-ed05-4075-83fa-7679a23de772" data-loc="65:12-65:94" data-file-name="app/services/page.tsx">About</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="91f30534-511c-4a4a-bc50-67190c7da088" data-loc="66:12-66:96" data-file-name="app/services/page.tsx">Contact</a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors" data-unique-id="7ca47c8c-52f6-491c-94b5-25a3f841a14c" data-loc="67:12-67:126" data-file-name="app/services/page.tsx">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1" data-unique-id="e767a6b9-788a-418e-bf83-5c5b077c19b4" data-loc="74:6-74:31" data-file-name="app/services/page.tsx">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30" data-unique-id="61ccf0d4-a712-499a-a08e-37011a601d29" data-loc="76:8-76:51" data-file-name="app/services/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="c8c4e1a7-4cba-4e55-aea3-a9a88b8a1d53" data-loc="77:10-77:50" data-file-name="app/services/page.tsx">
            <div className="text-center max-w-3xl mx-auto" data-unique-id="61e95aa4-abd1-4421-ae72-0c15a216a1b4" data-loc="78:12-78:59" data-file-name="app/services/page.tsx">
              <motion.h1 initial="hidden" animate="visible" variants={fadeIn} transition={{
              duration: 0.5
            }} className="text-4xl md:text-5xl font-bold text-primary mb-6" data-unique-id="142c97ed-e895-42eb-90c7-4fa12b819595" data-loc="79:14-81:76" data-file-name="app/services/page.tsx">
                Our AI Services & Solutions
              </motion.h1>
              <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-muted-foreground text-lg mb-8" data-unique-id="ae6fd754-303c-4742-8db4-24e8d1e8d624" data-loc="84:14-87:62" data-file-name="app/services/page.tsx">
                We offer a comprehensive suite of NETPUB-compatible AI-powered solutions designed to transform your business operations, enhance customer experiences, and drive sustainable growth with enterprise-grade reliability.
              </motion.p>
              <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
              duration: 0.5,
              delay: 0.4
            }} data-unique-id="32c31796-6f0b-46d1-8707-8b69350570b8" data-loc="90:14-93:15" data-file-name="app/services/page.tsx">
                <a href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium inline-flex items-center" data-unique-id="36f0796b-3748-479d-b29c-2635775d2c21" data-loc="94:16-94:178" data-file-name="app/services/page.tsx">
                  Discuss Your Project <ArrowRight size={16} className="ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16" data-unique-id="39a7aaae-2e4c-42da-ac99-76a5d301d235" data-loc="103:8-103:35" data-file-name="app/services/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="13e2448a-265c-4689-9337-0ac7c43ff9fc" data-loc="104:10-104:50" data-file-name="app/services/page.tsx">
            <div className="text-center mb-12" data-unique-id="a69debcd-dd25-418f-acd4-85e233ff6212" data-loc="105:12-105:47" data-file-name="app/services/page.tsx">
              <h2 className="text-3xl font-bold text-primary mb-4" data-unique-id="30afe85f-8392-4eaf-bb7a-cbce2a5907ef" data-loc="106:14-106:67" data-file-name="app/services/page.tsx">Our Core Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="5aa53dce-25ea-497c-8044-97b2bdd8c5b5" data-loc="107:14-107:69" data-file-name="app/services/page.tsx">
                Explore our range of AI solutions designed to address specific business challenges and unlock new opportunities.
              </p>
            </div>
            
            <div className="space-y-16" data-unique-id="7e5ec24c-9ce7-4a98-ac2f-6aa5dda03f29" data-loc="112:12-112:40" data-file-name="app/services/page.tsx">
              {services.map((service, index) => <motion.div key={index} initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.7
            }} viewport={{
              once: true
            }} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center gap-8 md:gap-12`} data-unique-id="522e5991-77fa-406a-a247-b9a879ac9bfc" data-loc="113:48-121:134" data-file-name="app/services/page.tsx">
                  <div className="md:w-1/2" data-unique-id="f9fdae30-512c-4779-a607-7db34f058349" data-loc="122:18-122:44" data-file-name="app/services/page.tsx">
                    <div className="rounded-lg overflow-hidden shadow-xl" data-unique-id="966e2023-91ea-46f4-b6bb-b616b8febdf8" data-loc="123:20-123:74" data-file-name="app/services/page.tsx">
                      <img src={service.icon} alt={service.title} className="w-full h-auto" data-unique-id="60fcea28-d240-46c4-b3e2-94fb30628992" data-loc="124:22-124:94" data-file-name="app/services/page.tsx" />
                    </div>
                  </div>
                  <div className="md:w-1/2" data-unique-id="88fdfd23-4fab-42dd-8c49-180a8e509667" data-loc="127:18-127:44" data-file-name="app/services/page.tsx">
                    <h3 className="text-2xl font-bold text-primary mb-4" data-unique-id="2d5f9718-fc05-4764-a07c-922750408e93" data-loc="128:20-128:73" data-file-name="app/services/page.tsx">{service.title}</h3>
                    <p className="text-muted-foreground mb-6" data-unique-id="23de7fce-c9f4-4317-9493-3804cca6d669" data-loc="129:20-129:62" data-file-name="app/services/page.tsx">{service.description}</p>
                    <ul className="space-y-3" data-unique-id="e6009c6f-16c5-4f4a-9358-3e253d12af18" data-loc="130:20-130:46" data-file-name="app/services/page.tsx">
                      {service.features.map((feature, idx) => <li key={idx} className="flex items-start" data-unique-id="64e2564b-e0d7-45a2-9e9b-79046de57885" data-loc="131:62-131:105" data-file-name="app/services/page.tsx">
                          <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} data-unique-id={`49b48dd4-e4db-4060-bbae-1d429c2b2bf7_${idx}`} data-loc="132:26-132:94" data-file-name="app/services/page.tsx" />
                          <span className="text-muted-foreground" data-unique-id="eb2dfbb1-bbec-4745-a387-b0d45d757123" data-loc="133:26-133:66" data-file-name="app/services/page.tsx">{feature}</span>
                        </li>)}
                    </ul>
                    <a href="/contact" className="mt-6 inline-flex items-center text-primary font-medium hover:text-primary/80" data-unique-id="5e2478f5-b436-4a6c-b32d-27e828b99587" data-loc="136:20-136:128" data-file-name="app/services/page.tsx">
                      Learn more <ChevronRight size={16} className="ml-1" data-unique-id={`27e4bc17-63dc-428d-a565-7b165c022d0e_${index}`} data-loc="137:33-137:76" data-file-name="app/services/page.tsx" />
                    </a>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-secondary/30" data-unique-id="14272254-662f-4464-8d61-be0d5fff7f6b" data-loc="146:8-146:51" data-file-name="app/services/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="b4ad7f95-4491-4206-8c4e-7906a4dee323" data-loc="147:10-147:50" data-file-name="app/services/page.tsx">
            <div className="text-center mb-12" data-unique-id="0905fe2f-71db-49df-b01d-07b2c75ea3d7" data-loc="148:12-148:47" data-file-name="app/services/page.tsx">
              <h2 className="text-3xl font-bold text-primary mb-4" data-unique-id="e6893d28-8ec4-49cf-9f3a-fe09a0cdfe8f" data-loc="149:14-149:67" data-file-name="app/services/page.tsx">Case Studies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="b115c655-ad0b-4425-9757-d29aa93101bd" data-loc="150:14-150:69" data-file-name="app/services/page.tsx">
                See how our AI solutions have delivered measurable results for our clients across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-unique-id="f731f153-78b8-4e48-8608-714a7e7ad646" data-loc="155:12-155:67" data-file-name="app/services/page.tsx">
              {caseStudies.map((study, index) => <motion.div key={index} initial={{
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
            }} className="bg-white rounded-lg overflow-hidden shadow-md border border-border" data-unique-id="32a1f058-e8e5-4cae-a15f-287cdd0b355e" data-loc="156:49-167:94" data-file-name="app/services/page.tsx">
                  <div className="h-48 overflow-hidden" data-unique-id="8077e86d-2ff0-43de-9bcb-73c60eb9bc21" data-loc="168:18-168:56" data-file-name="app/services/page.tsx">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" data-unique-id="4d8318b0-fe44-4f46-a686-84e6857c71d5" data-loc="169:20-169:102" data-file-name="app/services/page.tsx" />
                  </div>
                  <div className="p-6" data-unique-id="c172e908-172f-4bf3-bee4-985c798b5116" data-loc="171:18-171:39" data-file-name="app/services/page.tsx">
                    <div className="text-sm text-primary/70 font-medium mb-2" data-unique-id="441327e1-db87-4568-a2cc-1c26ba5cb0bd" data-loc="172:20-172:78" data-file-name="app/services/page.tsx">{study.client}</div>
                    <h3 className="text-xl font-semibold text-primary mb-3" data-unique-id="77c9471f-d0db-48b5-b711-fa7387fbadf3" data-loc="173:20-173:76" data-file-name="app/services/page.tsx">{study.title}</h3>
                    <p className="text-muted-foreground mb-4" data-unique-id="2191a0ae-cd0e-4a21-973d-279c465e08af" data-loc="174:20-174:62" data-file-name="app/services/page.tsx">{study.description}</p>
                    <a href="#" className="text-primary font-medium flex items-center hover:text-primary/80" data-unique-id="f12b38a9-72f6-4a03-b470-73db9a0cafd7" data-loc="175:20-175:109" data-file-name="app/services/page.tsx">
                      Read full case study <ChevronRight size={16} className="ml-1" data-unique-id={`81c80ee4-ac86-4b7e-9302-3c84471eb1df_${index}`} data-loc="176:43-176:86" data-file-name="app/services/page.tsx" />
                    </a>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* NETPUB Compatibility Section */}
        <section className="py-16 bg-white" data-unique-id="07ea815a-e9a8-4625-8583-4e6c0c1d98d7" data-loc="185:8-185:44" data-file-name="app/services/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="efc36864-c6f0-42af-88c7-7aa98cd3033a" data-loc="186:10-186:50" data-file-name="app/services/page.tsx">
            <div className="flex flex-col md:flex-row items-center gap-12" data-unique-id="29d39291-eef6-4f71-a11a-b52ba91e26ac" data-loc="187:12-187:75" data-file-name="app/services/page.tsx">
              <div className="md:w-1/2" data-unique-id="5147b7aa-a6b1-4fc9-9c23-d4b914ffad67" data-loc="188:14-188:40" data-file-name="app/services/page.tsx">
                <motion.div initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5
              }} viewport={{
                once: true
              }} data-unique-id="13561902-83d0-42e1-ae03-df9103021d5d" data-loc="189:16-194:17" data-file-name="app/services/page.tsx">
                  <h2 className="text-3xl font-bold text-primary mb-6" data-unique-id="e861132a-6ded-414c-8b36-d46ac1d49e30" data-loc="195:18-195:71" data-file-name="app/services/page.tsx">NETPUB Compatibility</h2>
                  <p className="text-muted-foreground mb-6" data-unique-id="d9e6f220-0558-4e4b-a9f9-c8adba8b8b79" data-loc="196:18-196:60" data-file-name="app/services/page.tsx">
                    Our AI solutions are specifically designed to integrate seamlessly with NETPUB environments, ensuring compatibility with your existing infrastructure and workflows.
                  </p>
                  <ul className="space-y-4" data-unique-id="46b818a5-8385-44c0-938a-640e96c344d6" data-loc="199:18-199:44" data-file-name="app/services/page.tsx">
                    <li className="flex items-start" data-unique-id="cc0fb0e0-f7ac-4420-af40-b1cc40777d05" data-loc="200:20-200:53" data-file-name="app/services/page.tsx">
                      <Check className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <div data-unique-id="e0a7741d-b1ff-40ac-86d1-4ce15a5fec8b" data-loc="202:22-202:27" data-file-name="app/services/page.tsx">
                        <span className="font-semibold text-primary" data-unique-id="e6b6b995-0240-41a2-a889-b340cd250322" data-loc="203:24-203:69" data-file-name="app/services/page.tsx">Seamless Integration</span>
                        <p className="text-muted-foreground" data-unique-id="911d0e35-defb-4fe9-a0c7-8e5f23f4e802" data-loc="204:24-204:61" data-file-name="app/services/page.tsx">Our solutions connect directly with your NETPUB infrastructure without requiring significant modifications.</p>
                      </div>
                    </li>
                    <li className="flex items-start" data-unique-id="065997bc-004f-4e61-83e6-690e683b2ed2" data-loc="207:20-207:53" data-file-name="app/services/page.tsx">
                      <Check className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <div data-unique-id="94b27f8e-079b-4789-882c-11c6a2a5a0d7" data-loc="209:22-209:27" data-file-name="app/services/page.tsx">
                        <span className="font-semibold text-primary" data-unique-id="e59ea031-2fe3-43d7-865f-ce47a911c318" data-loc="210:24-210:69" data-file-name="app/services/page.tsx">Data Synchronization</span>
                        <p className="text-muted-foreground" data-unique-id="fd0e6245-3fb5-40f7-b5f1-b18f9ddb6e0e" data-loc="211:24-211:61" data-file-name="app/services/page.tsx">Ensure consistent data flow between your AI solutions and NETPUB systems with real-time synchronization.</p>
                      </div>
                    </li>
                    <li className="flex items-start" data-unique-id="fe0bee58-094b-4736-8cc7-78a5f6fd11f8" data-loc="214:20-214:53" data-file-name="app/services/page.tsx">
                      <Check className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <div data-unique-id="0cfaa096-29fc-4091-9b83-0838ed1b1df7" data-loc="216:22-216:27" data-file-name="app/services/page.tsx">
                        <span className="font-semibold text-primary" data-unique-id="ec8c9b97-9dd6-4291-8abd-a0c76e127660" data-loc="217:24-217:69" data-file-name="app/services/page.tsx">Security Compliance</span>
                        <p className="text-muted-foreground" data-unique-id="1a93bf9a-0658-4285-b712-22bbc8255443" data-loc="218:24-218:61" data-file-name="app/services/page.tsx">Our integration maintains all security protocols and compliance requirements of your NETPUB environment.</p>
                      </div>
                    </li>
                    <li className="flex items-start" data-unique-id="227e4433-e5d5-4a9f-bb96-9baf28c4d0e3" data-loc="221:20-221:53" data-file-name="app/services/page.tsx">
                      <Check className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <div data-unique-id="3c2763fd-828a-472b-859c-34102b465bea" data-loc="223:22-223:27" data-file-name="app/services/page.tsx">
                        <span className="font-semibold text-primary" data-unique-id="3cf8bfff-c4ca-41d4-9b2a-6bb6c54b4dfa" data-loc="224:24-224:69" data-file-name="app/services/page.tsx">Performance Optimization</span>
                        <p className="text-muted-foreground" data-unique-id="1aaa6cbf-e12f-4924-ba18-b19bc105ccb2" data-loc="225:24-225:61" data-file-name="app/services/page.tsx">Specially optimized for NETPUB environments to ensure maximum performance and minimal latency.</p>
                      </div>
                    </li>
                  </ul>
                  <a href="/contact" className="mt-8 inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium" data-unique-id="2e278b95-a7c7-4c37-9c70-ed0843884699" data-loc="229:18-229:185" data-file-name="app/services/page.tsx">
                    Learn More About NETPUB Integration
                  </a>
                </motion.div>
              </div>
              <div className="md:w-1/2" data-unique-id="260267eb-55ad-4b41-b05a-97c6d5f5353c" data-loc="234:14-234:40" data-file-name="app/services/page.tsx">
                <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5
              }} viewport={{
                once: true
              }} className="rounded-lg overflow-hidden shadow-xl" data-unique-id="e05e61d5-8024-492a-82b8-6dc1dae6d518" data-loc="235:16-241:17" data-file-name="app/services/page.tsx">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="NETPUB Integration" className="w-full h-auto" data-unique-id="96d22b6f-92dd-49ed-b463-efb65d9cb296" data-loc="242:18-246:20" data-file-name="app/services/page.tsx" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16" data-unique-id="51b7292b-ef7e-43a8-81c8-d20401e31710" data-loc="254:8-254:35" data-file-name="app/services/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="250922ec-5fee-4dba-b37f-44bd224da4ff" data-loc="255:10-255:50" data-file-name="app/services/page.tsx">
            <div className="text-center mb-12" data-unique-id="ed836125-9c3b-4bb5-ba49-02aa51491083" data-loc="256:12-256:47" data-file-name="app/services/page.tsx">
              <h2 className="text-3xl font-bold text-primary mb-4" data-unique-id="44bba393-c8bf-494d-ab47-d19664676c49" data-loc="257:14-257:67" data-file-name="app/services/page.tsx">Flexible Pricing Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="775f4668-bd78-43c4-a807-1494b2749928" data-loc="258:14-258:69" data-file-name="app/services/page.tsx">
                We offer transparent pricing models designed to fit businesses of all sizes, from startups to enterprises, with special consideration for NETPUB integration requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-unique-id="d113f06e-6adb-4ae9-b979-28ac850606c3" data-loc="263:12-263:85" data-file-name="app/services/page.tsx">
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
            }} className="bg-white rounded-lg overflow-hidden shadow-md border border-border p-8" data-unique-id="ed87bcef-63dd-47e4-9e9d-887adcb79d89" data-loc="264:14-274:98" data-file-name="app/services/page.tsx">
                <div className="text-center mb-6" data-unique-id="023aa586-1ee8-468b-b2cc-26690843c9e0" data-loc="275:16-275:50" data-file-name="app/services/page.tsx">
                  <h3 className="text-xl font-bold text-primary mb-2" data-unique-id="58a230d2-2836-483a-b583-4fae22ca75cd" data-loc="276:18-276:70" data-file-name="app/services/page.tsx">Starter</h3>
                  <div className="text-3xl font-bold text-primary mb-1" data-unique-id="722e6417-6130-40bb-916c-d5b1b3f73cbf" data-loc="277:18-277:72" data-file-name="app/services/page.tsx">$1,999<span className="text-lg font-normal text-muted-foreground" data-unique-id="7cb85390-202a-4351-925e-53cb6b174033" data-loc="277:78-277:138" data-file-name="app/services/page.tsx">/mo</span></div>
                  <p className="text-muted-foreground" data-unique-id="79a80e91-6eb2-44aa-8555-b01a3696d656" data-loc="278:18-278:55" data-file-name="app/services/page.tsx">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8" data-unique-id="1a13d037-4418-4b35-8060-9261877570c5" data-loc="280:16-280:47" data-file-name="app/services/page.tsx">
                  <li className="flex items-start" data-unique-id="95236f46-cfc6-40d0-a83d-2e6df5fabb06" data-loc="281:18-281:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="ce9c12bc-ce47-4b84-890f-c6035836bf04" data-loc="283:20-283:60" data-file-name="app/services/page.tsx">1 AI model of your choice</span>
                  </li>
                  <li className="flex items-start" data-unique-id="a78deee9-8cde-4d27-a257-6069f017b986" data-loc="285:18-285:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="0b7e97cd-a5d9-444f-a234-29b49b395ae5" data-loc="287:20-287:60" data-file-name="app/services/page.tsx">Up to 10,000 API calls/month</span>
                  </li>
                  <li className="flex items-start" data-unique-id="bec1a4d8-7af6-4dbf-ad5e-84e48739d3fd" data-loc="289:18-289:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="f703964e-5e1b-43b2-be31-8caf4f2fada1" data-loc="291:20-291:60" data-file-name="app/services/page.tsx">Basic integration support</span>
                  </li>
                  <li className="flex items-start" data-unique-id="1e1969bd-b5a6-4cbc-8f67-de00bef80312" data-loc="293:18-293:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="c0bd1535-7743-4dfb-bf1b-5d328ff4d772" data-loc="295:20-295:60" data-file-name="app/services/page.tsx">Email support</span>
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-secondary text-primary font-medium py-2 rounded-md hover:bg-secondary/80 transition-colors" data-unique-id="af757b7f-96a0-4885-85ab-17fb056dad1a" data-loc="298:16-298:159" data-file-name="app/services/page.tsx">
                  Get Started
                </a>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg overflow-hidden shadow-xl border border-primary p-8 transform md:-translate-y-4" data-unique-id="f6123965-ce52-4802-a77c-6030ac268379" data-loc="303:14-314:127" data-file-name="app/services/page.tsx">
                <div className="text-center mb-6" data-unique-id="c2943fc1-8222-49e3-804d-35dce9b867eb" data-loc="315:16-315:50" data-file-name="app/services/page.tsx">
                  <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full inline-block mb-4" data-unique-id="30259ac4-3dd8-4227-83b1-0bd005d6ed6c" data-loc="316:18-316:131" data-file-name="app/services/page.tsx">Most Popular</div>
                  <h3 className="text-xl font-bold text-primary mb-2" data-unique-id="036388c1-0479-4128-9076-c2bb00e42c5e" data-loc="317:18-317:70" data-file-name="app/services/page.tsx">Professional</h3>
                  <div className="text-3xl font-bold text-primary mb-1" data-unique-id="a2265ee5-4150-4cf2-a5ae-7b676e6d93ae" data-loc="318:18-318:72" data-file-name="app/services/page.tsx">$4,999<span className="text-lg font-normal text-muted-foreground" data-unique-id="a5a44c4c-53e5-4c5b-b46b-16f348ed4c67" data-loc="318:78-318:138" data-file-name="app/services/page.tsx">/mo</span></div>
                  <p className="text-muted-foreground" data-unique-id="35c0c6d0-874a-451b-8a5a-0f41abcf793f" data-loc="319:18-319:55" data-file-name="app/services/page.tsx">For growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8" data-unique-id="86aec6b8-1182-4834-ae90-0c7268c72b5f" data-loc="321:16-321:47" data-file-name="app/services/page.tsx">
                  <li className="flex items-start" data-unique-id="98ae1e61-6960-4533-a25b-b46e7aa734f0" data-loc="322:18-322:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="3669a8fa-5bb2-4bfe-8158-87dc9ed0781b" data-loc="324:20-324:60" data-file-name="app/services/page.tsx">3 AI models of your choice</span>
                  </li>
                  <li className="flex items-start" data-unique-id="271c5738-0c5b-4760-a787-11f740fbe903" data-loc="326:18-326:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="33688153-c5c3-4bbd-a13a-c0a2fda4dad3" data-loc="328:20-328:60" data-file-name="app/services/page.tsx">Up to 50,000 API calls/month</span>
                  </li>
                  <li className="flex items-start" data-unique-id="4cd69c99-cb3c-4970-849a-89e2fb761ef8" data-loc="330:18-330:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="dc11624f-8ab8-4210-8512-ce0d9dde1637" data-loc="332:20-332:60" data-file-name="app/services/page.tsx">Advanced integration support</span>
                  </li>
                  <li className="flex items-start" data-unique-id="25c406d6-200a-4321-a4d0-0ccce3cf6cde" data-loc="334:18-334:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="8f794189-cbd4-47e2-8c03-cb108badc765" data-loc="336:20-336:60" data-file-name="app/services/page.tsx">Priority email & phone support</span>
                  </li>
                  <li className="flex items-start" data-unique-id="5854653c-401a-4657-9830-68b22918c7d6" data-loc="338:18-338:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="0250f27a-3aba-441b-b608-319b8c79b95e" data-loc="340:20-340:60" data-file-name="app/services/page.tsx">Quarterly strategy sessions</span>
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-primary text-primary-foreground font-medium py-2 rounded-md hover:bg-primary/90 transition-colors" data-unique-id="e9b71372-4cd3-4e32-b105-32eec006c11c" data-loc="343:16-343:166" data-file-name="app/services/page.tsx">
                  Get Started
                </a>
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
            }} className="bg-white rounded-lg overflow-hidden shadow-md border border-border p-8" data-unique-id="8cc70648-bb08-405f-91c4-5117c5f20daf" data-loc="348:14-359:98" data-file-name="app/services/page.tsx">
                <div className="text-center mb-6" data-unique-id="e90af7e9-f362-429d-835b-01926611dd1b" data-loc="360:16-360:50" data-file-name="app/services/page.tsx">
                  <h3 className="text-xl font-bold text-primary mb-2" data-unique-id="c3deba5c-a697-4654-9991-a4caed48bb02" data-loc="361:18-361:70" data-file-name="app/services/page.tsx">Enterprise</h3>
                  <div className="text-3xl font-bold text-primary mb-1" data-unique-id="05d35cca-d812-4ea2-8be5-d4e9c2f88216" data-loc="362:18-362:72" data-file-name="app/services/page.tsx">Custom</div>
                  <p className="text-muted-foreground" data-unique-id="e8901100-d549-428b-b018-67b40d86ad41" data-loc="363:18-363:55" data-file-name="app/services/page.tsx">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8" data-unique-id="53d1fa9e-a0e3-40ec-8f16-f223f87672f2" data-loc="365:16-365:47" data-file-name="app/services/page.tsx">
                  <li className="flex items-start" data-unique-id="013db823-9456-414c-b9e0-2f61e251975a" data-loc="366:18-366:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="8e2f8f33-a6cc-4e17-b760-bbdb14d9daba" data-loc="368:20-368:60" data-file-name="app/services/page.tsx">Unlimited AI models</span>
                  </li>
                  <li className="flex items-start" data-unique-id="7f639ca7-ef29-4c09-ac05-f41efaa6ce29" data-loc="370:18-370:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="51f4b4b8-5ee9-42aa-bcb5-23253f967b1c" data-loc="372:20-372:60" data-file-name="app/services/page.tsx">Custom API call volume</span>
                  </li>
                  <li className="flex items-start" data-unique-id="12714b0f-daa0-4fd7-befa-af42eedb7ea5" data-loc="374:18-374:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="da85ec5f-728e-4aa5-b25d-91a34edfee4e" data-loc="376:20-376:60" data-file-name="app/services/page.tsx">Full-service implementation</span>
                  </li>
                  <li className="flex items-start" data-unique-id="171509d4-3e8a-49a4-9b94-195fb334f270" data-loc="378:18-378:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="44fcf880-d6de-4a41-9a9b-8fee33868318" data-loc="380:20-380:60" data-file-name="app/services/page.tsx">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-start" data-unique-id="8c35bd45-849e-4e0b-a137-2d500a572a00" data-loc="382:18-382:51" data-file-name="app/services/page.tsx">
                    <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground" data-unique-id="971dcbed-6045-4060-a905-5fa9b84f6d33" data-loc="384:20-384:60" data-file-name="app/services/page.tsx">Custom AI model development</span>
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-secondary text-primary font-medium py-2 rounded-md hover:bg-secondary/80 transition-colors" data-unique-id="52c20864-89d4-410e-bd96-2472021c9054" data-loc="387:16-387:159" data-file-name="app/services/page.tsx">
                  Contact Sales
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground" data-unique-id="a6065493-8c6b-4f19-9a0f-74ba1da6eda2" data-loc="396:8-396:70" data-file-name="app/services/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="c2c86863-b48f-4079-8112-f24a8657149c" data-loc="397:10-397:50" data-file-name="app/services/page.tsx">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" data-unique-id="f01ff4f7-e8c8-4f84-8833-3d773b7d1745" data-loc="398:12-398:90" data-file-name="app/services/page.tsx">
              <div className="mb-6 md:mb-0 md:w-2/3" data-unique-id="251320b7-3d2a-4144-9ef9-2cfbd2fd1890" data-loc="399:14-399:53" data-file-name="app/services/page.tsx">
                <h2 className="text-2xl md:text-4xl font-bold mb-4" data-unique-id="ec563362-4f29-4db0-aca0-e1635a1ee072" data-loc="400:16-400:68" data-file-name="app/services/page.tsx">Ready to transform your business with AI?</h2>
                <p className="text-primary-foreground/80 text-lg" data-unique-id="38c8e7d7-17e9-4ec5-bf68-9e8b137096cf" data-loc="401:16-401:66" data-file-name="app/services/page.tsx">
                  Schedule a consultation with our experts to discuss your specific needs and goals.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-start md:justify-end" data-unique-id="6ae8bcc4-5b8b-492f-ae07-aad3ec1b50fc" data-loc="405:14-405:74" data-file-name="app/services/page.tsx">
                <a href="/contact" className="bg-white text-primary px-6 py-3 rounded-md hover:bg-white/90 transition-colors font-medium inline-block" data-unique-id="97cd822c-060b-4fee-9cac-2e025bb2a6fd" data-loc="406:16-406:151" data-file-name="app/services/page.tsx">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-8" data-unique-id="f4f614e8-9de9-4883-89e0-246d423bf208" data-loc="415:6-415:44" data-file-name="app/services/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="9dad9ff6-7910-4396-bdf1-4334043545b1" data-loc="416:8-416:48" data-file-name="app/services/page.tsx">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-unique-id="afd31dff-e17f-4118-a17f-bed5648d1a96" data-loc="417:10-417:65" data-file-name="app/services/page.tsx">
            <div data-unique-id="2747a72c-1585-454e-8294-e7e50e437b89" data-loc="418:12-418:17" data-file-name="app/services/page.tsx">
              <h3 className="text-lg font-bold text-primary mb-4" data-unique-id="701e20c4-51b4-48bb-9639-84cdade33c38" data-loc="419:14-419:66" data-file-name="app/services/page.tsx">Amen</h3>
              <p className="text-muted-foreground" data-unique-id="3fe5b4f7-5583-4a9a-985b-168beea5305c" data-loc="420:14-420:51" data-file-name="app/services/page.tsx">
                Providing intelligent AI solutions for businesses of all sizes.
              </p>
            </div>
            <div data-unique-id="4a6e4f6c-b2c3-4020-8e2c-3eef46f9ec72" data-loc="424:12-424:17" data-file-name="app/services/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="a0d14c1b-66f7-4b8f-adfd-d4b0228b3b5e" data-loc="425:14-425:60" data-file-name="app/services/page.tsx">Services</h4>
              <ul className="space-y-2" data-unique-id="32072749-3eb6-4123-b233-0ac1aeae7023" data-loc="426:14-426:40" data-file-name="app/services/page.tsx">
                <li data-unique-id="ee92169d-27de-4f5a-a6c3-45aa423d0541" data-loc="427:16-427:20" data-file-name="app/services/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="c401899b-af69-4b22-b16f-d07add45695a" data-loc="427:20-427:93" data-file-name="app/services/page.tsx">Natural Language Processing</a></li>
                <li data-unique-id="39b07d78-bb0a-4f21-955c-3c115bea2fef" data-loc="428:16-428:20" data-file-name="app/services/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="8a5f312e-ba7d-4ad0-80b3-c8f44d39c4e6" data-loc="428:20-428:93" data-file-name="app/services/page.tsx">Computer Vision</a></li>
                <li data-unique-id="44a6e055-2c82-4cee-8234-7d515709793b" data-loc="429:16-429:20" data-file-name="app/services/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="160973f3-2c23-4c64-a26c-8c01ecc7f0f0" data-loc="429:20-429:93" data-file-name="app/services/page.tsx">Predictive Analytics</a></li>
                <li data-unique-id="7a445c83-3675-4bcf-94a6-fbe3dc1b6a45" data-loc="430:16-430:20" data-file-name="app/services/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="8831a911-45ab-4388-8419-f769221660ab" data-loc="430:20-430:93" data-file-name="app/services/page.tsx">Custom AI Solutions</a></li>
              </ul>
            </div>
            <div data-unique-id="c8975758-0ada-4496-b053-096a02702517" data-loc="433:12-433:17" data-file-name="app/services/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="5935bbf7-0350-4b1b-a437-5dc95790e7bf" data-loc="434:14-434:60" data-file-name="app/services/page.tsx">Company</h4>
              <ul className="space-y-2" data-unique-id="cd482dbd-74e4-42de-aea3-f794a1f8eb62" data-loc="435:14-435:40" data-file-name="app/services/page.tsx">
                <li data-unique-id="8614141f-b4f5-418c-ba7c-2518084367bc" data-loc="436:16-436:20" data-file-name="app/services/page.tsx"><a href="/about" className="text-muted-foreground hover:text-primary" data-unique-id="b4a4bb5c-7b5b-4fb0-b01d-c421e14771f6" data-loc="436:20-436:90" data-file-name="app/services/page.tsx">About Us</a></li>
                <li data-unique-id="58ad1533-7395-4fd4-b01f-8b12c560f9d4" data-loc="437:16-437:20" data-file-name="app/services/page.tsx"><a href="/about" className="text-muted-foreground hover:text-primary" data-unique-id="7b3193c5-124d-45ac-9773-1179eea7453c" data-loc="437:20-437:90" data-file-name="app/services/page.tsx">Careers</a></li>
                <li data-unique-id="741cc02b-b12e-434d-b4a9-e16cd44e9f90" data-loc="438:16-438:20" data-file-name="app/services/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="d844f7d3-6dcf-44dd-849c-080d3c013359" data-loc="438:20-438:85" data-file-name="app/services/page.tsx">Blog</a></li>
                <li data-unique-id="8fc138f0-1e51-40dd-9b5c-9877d4804051" data-loc="439:16-439:20" data-file-name="app/services/page.tsx"><a href="/contact" className="text-muted-foreground hover:text-primary" data-unique-id="b7bb6bd8-dc2b-461b-b31f-ea09e4641bbc" data-loc="439:20-439:92" data-file-name="app/services/page.tsx">Contact</a></li>
              </ul>
            </div>
            <div data-unique-id="4b86264c-5732-4e4c-9d0b-2ac4262911f8" data-loc="442:12-442:17" data-file-name="app/services/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="e8f060b9-7a97-49be-b5a1-99a49e8764d9" data-loc="443:14-443:60" data-file-name="app/services/page.tsx">Legal</h4>
              <ul className="space-y-2" data-unique-id="22e5d1d7-dc0e-470b-b153-210c9f441726" data-loc="444:14-444:40" data-file-name="app/services/page.tsx">
                <li data-unique-id="9a96101d-3f00-4003-8920-65e18f2997c5" data-loc="445:16-445:20" data-file-name="app/services/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="2bf8fc81-2a02-4d14-b909-9ee594057cf2" data-loc="445:20-445:85" data-file-name="app/services/page.tsx">Privacy Policy</a></li>
                <li data-unique-id="a4cfdb91-1963-4098-96cb-33482dc0185e" data-loc="446:16-446:20" data-file-name="app/services/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="f65a9084-95a3-4a5c-a91e-f107fd866644" data-loc="446:20-446:85" data-file-name="app/services/page.tsx">Terms of Service</a></li>
                <li data-unique-id="1748d1d7-45b1-4ba4-a76a-5000c24a390a" data-loc="447:16-447:20" data-file-name="app/services/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="c5bc9e36-7b5f-4e8a-83a7-943838a106ae" data-loc="447:20-447:85" data-file-name="app/services/page.tsx">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center" data-unique-id="1259633b-1df9-4e63-bad3-1cee93f6b1b2" data-loc="451:10-451:72" data-file-name="app/services/page.tsx">
            <div className="flex justify-center items-center mb-4" data-unique-id="91eed042-bf09-4eac-8c48-c989f9e9f26f" data-loc="452:12-452:67" data-file-name="app/services/page.tsx">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-flex items-center" data-unique-id="1248f454-142f-4b2a-ac8d-7b1ec7cd37b0" data-loc="453:14-453:126" data-file-name="app/services/page.tsx">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" data-unique-id="ef4b9519-7a95-4b61-9df0-ade26bee73c2" data-loc="454:16-454:211" data-file-name="app/services/page.tsx">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                NETPUB Compatible
              </div>
            </div>
            <p className="text-muted-foreground" data-unique-id="9b209bc8-060d-45b4-bc15-6bad5469c3a7" data-loc="461:12-461:49" data-file-name="app/services/page.tsx">&copy; {new Date().getFullYear()} Amen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}