"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters"
  }),
  service: z.enum(["nlp", "vision", "analytics", "custom", "other"])
});
type ContactFormValues = z.infer<typeof contactFormSchema>;
export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: "other"
    }
  });
  const onSubmit = async (data: ContactFormValues) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
  };
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
  return <div className="min-h-screen flex flex-col bg-background" data-unique-id="584366f4-5474-4e66-abd0-b8e0b2339d7c" data-loc="57:9-57:67" data-file-name="app/contact/page.tsx">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border" data-unique-id="d5d43703-9c51-48c4-8cb9-0f1937180ed3" data-loc="59:6-59:76" data-file-name="app/contact/page.tsx">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center" data-unique-id="547e3c97-85ad-4783-9103-f9c0dfd5ecb5" data-loc="60:8-60:87" data-file-name="app/contact/page.tsx">
          <div className="flex items-center" data-unique-id="eeefee58-42d9-49f6-9d7f-416ee1e2bb6b" data-loc="61:10-61:45" data-file-name="app/contact/page.tsx">
            <a href="/" className="text-xl font-bold text-primary md:text-2xl" data-unique-id="9eff95d9-9190-4fb9-a174-7b8c4b2e6e75" data-loc="62:12-62:79" data-file-name="app/contact/page.tsx">Amen</a>
          </div>
          
          <nav className="flex items-center space-x-6" data-unique-id="18def212-bffe-4316-b964-19cf31a97446" data-loc="65:10-65:55" data-file-name="app/contact/page.tsx">
            <a href="/" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="8b875171-1f68-4c81-bb51-cab815d091aa" data-loc="66:12-66:89" data-file-name="app/contact/page.tsx">Home</a>
            <a href="/services" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="867fd42e-f1ef-4a05-b23b-7abb793a03fb" data-loc="67:12-67:97" data-file-name="app/contact/page.tsx">Services</a>
            <a href="/about" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="b4857329-5540-4605-8a25-ef05fcfbeeda" data-loc="68:12-68:94" data-file-name="app/contact/page.tsx">About</a>
            <a href="/contact" className="text-primary hover:text-primary/80 font-medium" data-unique-id="63a39296-554d-4c8a-a57a-722f67eaadff" data-loc="69:12-69:90" data-file-name="app/contact/page.tsx">Contact</a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors" data-unique-id="c56d554d-d606-44d5-8f7e-337dacf349fe" data-loc="70:12-70:126" data-file-name="app/contact/page.tsx">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1" data-unique-id="8596d48d-6714-48d3-93c5-08524dd837dc" data-loc="77:6-77:31" data-file-name="app/contact/page.tsx">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30" data-unique-id="fa380d07-8a92-44dc-aeba-281c70792bda" data-loc="79:8-79:51" data-file-name="app/contact/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="dd7cf09e-0b76-4c4d-9ad6-de56efb98879" data-loc="80:10-80:50" data-file-name="app/contact/page.tsx">
            <div className="text-center max-w-3xl mx-auto" data-unique-id="0373b61d-0298-4911-9568-dfbffa4b045e" data-loc="81:12-81:59" data-file-name="app/contact/page.tsx">
              <motion.h1 initial="hidden" animate="visible" variants={fadeIn} transition={{
              duration: 0.5
            }} className="text-4xl md:text-5xl font-bold text-primary mb-6" data-unique-id="92758be2-8c0f-4f3d-a38a-3549f2b270d4" data-loc="82:14-84:76" data-file-name="app/contact/page.tsx">
                Get in Touch
              </motion.h1>
              <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-muted-foreground text-lg" data-unique-id="0f061fb7-7a7f-4cce-8290-d395e05c5d4a" data-loc="87:14-90:57" data-file-name="app/contact/page.tsx">
                Have questions about our NETPUB-compatible AI solutions? Ready to start a project? Our team of enterprise integration specialists is here to help you navigate the world of artificial intelligence and ensure seamless implementation.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16" data-unique-id="1a4f59d5-bcfa-4d37-a442-77f021ce32f1" data-loc="98:8-98:35" data-file-name="app/contact/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="c63bbf3f-fa26-44b1-836c-aa08c929aa82" data-loc="99:10-99:50" data-file-name="app/contact/page.tsx">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-unique-id="42ede2fa-54aa-438e-8d27-a06cc73cf3d7" data-loc="100:12-100:73" data-file-name="app/contact/page.tsx">
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
            }} className="bg-white p-8 rounded-lg shadow-md border border-border text-center" data-unique-id="fd23d266-d224-42ae-a15b-c93d9a1f115c" data-loc="101:14-111:94" data-file-name="app/contact/page.tsx">
                <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" data-unique-id="106c9960-f313-4328-8972-694e0b8e81db" data-loc="112:16-112:118" data-file-name="app/contact/page.tsx">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2" data-unique-id="e9e6f8ab-32ac-435e-a88f-30ef231bae6d" data-loc="115:16-115:72" data-file-name="app/contact/page.tsx">Email Us</h3>
                <p className="text-muted-foreground mb-4" data-unique-id="a7237309-58bb-422f-91a5-d5c91a00e911" data-loc="116:16-116:58" data-file-name="app/contact/page.tsx">Our team typically responds within 24 hours</p>
                <a href="mailto:info@amen-ai.com" className="text-primary font-medium hover:text-primary/80" data-unique-id="d8e3be3a-660b-46ed-a882-53d0f7b27146" data-loc="117:16-117:109" data-file-name="app/contact/page.tsx">
                  info@amen-ai.com
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
            }} className="bg-white p-8 rounded-lg shadow-md border border-border text-center" data-unique-id="a9cf3e81-5cf3-413c-9e1e-de8a715250ba" data-loc="122:14-133:94" data-file-name="app/contact/page.tsx">
                <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" data-unique-id="9fce3e62-7b88-47eb-a5b2-ef69a2136c24" data-loc="134:16-134:118" data-file-name="app/contact/page.tsx">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2" data-unique-id="b12cceb6-59ab-4689-beff-f63104e17e98" data-loc="137:16-137:72" data-file-name="app/contact/page.tsx">Call Us</h3>
                <p className="text-muted-foreground mb-4" data-unique-id="076b9a3a-ad44-4404-a484-4f43c9f30640" data-loc="138:16-138:58" data-file-name="app/contact/page.tsx">Available Monday-Friday, 9am-6pm EST</p>
                <a href="tel:+1-555-123-4567" className="text-primary font-medium hover:text-primary/80" data-unique-id="e644d4a7-ac36-4b9c-845d-097f75c7cd8a" data-loc="139:16-139:105" data-file-name="app/contact/page.tsx">
                  +1 (555) 123-4567
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
            }} className="bg-white p-8 rounded-lg shadow-md border border-border text-center" data-unique-id="cdd47c87-9b64-419d-82d9-725deecd3ecd" data-loc="144:14-155:94" data-file-name="app/contact/page.tsx">
                <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" data-unique-id="45a95a5c-e8c4-4071-8416-9491469e4f29" data-loc="156:16-156:118" data-file-name="app/contact/page.tsx">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2" data-unique-id="38dc52e8-b309-4b5b-8290-ca830d1e9ddf" data-loc="159:16-159:72" data-file-name="app/contact/page.tsx">Visit Us</h3>
                <p className="text-muted-foreground mb-4" data-unique-id="912a71f9-e261-4075-96c5-37d85b49693f" data-loc="160:16-160:58" data-file-name="app/contact/page.tsx">Our headquarters location</p>
                <address className="text-primary font-medium not-italic" data-unique-id="07afa5d3-7911-4fdd-bd83-29570852d154" data-loc="161:16-161:73" data-file-name="app/contact/page.tsx">
                  123 AI Boulevard<br data-unique-id="c3e880b3-cd7d-431a-a793-ac980f9c8ad7" data-loc="162:34-162:40" data-file-name="app/contact/page.tsx" />
                  San Francisco, CA 94105
                </address>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-unique-id="d108db6a-ef83-445e-a9be-380b45374f61" data-loc="168:12-168:68" data-file-name="app/contact/page.tsx">
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
            }} data-unique-id="ca34d584-2733-4be7-871d-68f562ced6dd" data-loc="169:14-179:15" data-file-name="app/contact/page.tsx">
                <h2 className="text-3xl font-bold text-primary mb-6" data-unique-id="31fe7c9d-b3ab-4800-9a9f-0c4b3b23b637" data-loc="180:16-180:69" data-file-name="app/contact/page.tsx">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8" data-unique-id="05f88085-c769-4e2b-98b9-7561cfca38ff" data-loc="181:16-181:58" data-file-name="app/contact/page.tsx">
                  Fill out the form below and one of our AI integration specialists will get back to you shortly to discuss your specific needs and NETPUB compatibility requirements.
                </p>
                
                {isSubmitted ? <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} className="bg-green-50 border border-green-200 rounded-lg p-6 text-center" data-unique-id="cf183659-aacf-4ae1-bc9e-e56a866d70bf" data-loc="185:31-189:92" data-file-name="app/contact/page.tsx">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-green-800 mb-2" data-unique-id="856e5306-104f-4df9-b43b-021c4ca006ad" data-loc="191:20-191:78" data-file-name="app/contact/page.tsx">Message Sent!</h3>
                    <p className="text-green-700" data-unique-id="30a90d55-da66-4302-b2e2-504d03d41d6b" data-loc="192:20-192:50" data-file-name="app/contact/page.tsx">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-4 text-primary font-medium hover:text-primary/80" data-unique-id="c4e34805-0ef1-4dcf-92e8-6d217a52843d" data-loc="195:20-195:130" data-file-name="app/contact/page.tsx">
                      Send another message
                    </button>
                  </motion.div> : <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-unique-id="bfc4f5b1-a6f4-450c-975d-0ed7851f775b" data-loc="198:34-198:96" data-file-name="app/contact/page.tsx">
                    <div data-unique-id="fb725364-e708-4b72-a486-66004a376162" data-loc="199:20-199:25" data-file-name="app/contact/page.tsx">
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-1" data-unique-id="b39f4d0b-7aa9-4ac4-a671-4e66241b351e" data-loc="200:22-200:100" data-file-name="app/contact/page.tsx">
                        Name <span className="text-red-500" data-unique-id="1c2a16c8-cd5c-4021-aa23-7e2a5ced23cf" data-loc="201:29-201:60" data-file-name="app/contact/page.tsx">*</span>
                      </label>
                      <input id="name" type="text" className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20`} placeholder="Your name" {...register("name")} data-unique-id="9556ea69-53aa-4e72-804e-24e0a0faf037" data-loc="203:22-203:254" data-file-name="app/contact/page.tsx" />
                      {errors.name && <p className="mt-1 text-sm text-red-500" data-unique-id="4083c3de-6938-483b-ae1c-268ea1de8f97" data-loc="204:38-204:79" data-file-name="app/contact/page.tsx">{errors.name.message}</p>}
                    </div>
                    
                    <div data-unique-id="b35ed708-73cb-4274-b090-5036e5ba7173" data-loc="207:20-207:25" data-file-name="app/contact/page.tsx">
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-1" data-unique-id="ca980a59-42d7-4fb7-96e7-8bcf103a254c" data-loc="208:22-208:101" data-file-name="app/contact/page.tsx">
                        Email <span className="text-red-500" data-unique-id="812237ac-a2b0-459b-a413-e173e9ba5136" data-loc="209:30-209:61" data-file-name="app/contact/page.tsx">*</span>
                      </label>
                      <input id="email" type="email" className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20`} placeholder="your.email@example.com" {...register("email")} data-unique-id="847cff02-773f-4f3b-935b-c0043f75b115" data-loc="211:22-211:271" data-file-name="app/contact/page.tsx" />
                      {errors.email && <p className="mt-1 text-sm text-red-500" data-unique-id="83fca985-b997-4297-a078-760de824fb40" data-loc="212:39-212:80" data-file-name="app/contact/page.tsx">{errors.email.message}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="b719f195-0cb0-4979-b228-a969d5150c25" data-loc="215:20-215:75" data-file-name="app/contact/page.tsx">
                      <div data-unique-id="cda40879-aa97-475e-98c0-f4fabc6fea49" data-loc="216:22-216:27" data-file-name="app/contact/page.tsx">
                        <label htmlFor="company" className="block text-sm font-medium text-primary mb-1" data-unique-id="99523546-3db8-429c-b5f0-5cdfe7c1ce7b" data-loc="217:24-217:105" data-file-name="app/contact/page.tsx">
                          Company
                        </label>
                        <input id="company" type="text" className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your company" {...register("company")} data-unique-id="4b5a95fc-5293-4fd8-8fc7-f20ea1297f7f" data-loc="220:24-220:225" data-file-name="app/contact/page.tsx" />
                      </div>
                      
                      <div data-unique-id="bf3b107f-5f72-4519-825b-1fbdc6f365e5" data-loc="223:22-223:27" data-file-name="app/contact/page.tsx">
                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1" data-unique-id="695d78e1-59e2-4216-90e1-1b8d3fba817c" data-loc="224:24-224:103" data-file-name="app/contact/page.tsx">
                          Phone
                        </label>
                        <input id="phone" type="tel" className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your phone number" {...register("phone")} data-unique-id="c83bf5d6-ee43-47e6-9e13-0c0bc9fcd1a8" data-loc="227:24-227:225" data-file-name="app/contact/page.tsx" />
                      </div>
                    </div>
                    
                    <div data-unique-id="34fed568-3f4d-45b8-8371-480c54145f4a" data-loc="231:20-231:25" data-file-name="app/contact/page.tsx">
                      <label htmlFor="service" className="block text-sm font-medium text-primary mb-1" data-unique-id="1f33a9a9-9a33-4108-8fe8-fe1a26ee84e9" data-loc="232:22-232:103" data-file-name="app/contact/page.tsx">
                        Service of Interest <span className="text-red-500" data-unique-id="be087b56-8271-4878-a05c-ad36f13e49ee" data-loc="233:44-233:75" data-file-name="app/contact/page.tsx">*</span>
                      </label>
                      <select id="service" className={`w-full px-4 py-2 border ${errors.service ? 'border-red-500' : 'border-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20`} {...register("service")} data-unique-id="4b3ed453-c3fe-421f-8b4f-194873c3601f" data-loc="235:22-235:226" data-file-name="app/contact/page.tsx">
                        <option value="nlp" data-unique-id="40eb6a9c-4ced-472f-8f32-aef1208b03e8" data-loc="236:24-236:44" data-file-name="app/contact/page.tsx">Natural Language Processing</option>
                        <option value="vision" data-unique-id="c834d15c-c817-43ec-9701-ce454e6ebe19" data-loc="237:24-237:47" data-file-name="app/contact/page.tsx">Computer Vision</option>
                        <option value="analytics" data-unique-id="29ebdafe-dbd7-4b84-8220-e8a42429ab98" data-loc="238:24-238:50" data-file-name="app/contact/page.tsx">Predictive Analytics</option>
                        <option value="custom" data-unique-id="049a3ab5-3827-4937-a2d2-52c06f57ddec" data-loc="239:24-239:47" data-file-name="app/contact/page.tsx">Custom AI Solution</option>
                        <option value="netpub" data-unique-id="bf57be5b-859f-4f81-a653-85cb3195678d" data-loc="240:24-240:47" data-file-name="app/contact/page.tsx">NETPUB Integration</option>
                        <option value="enterprise" data-unique-id="4a1df443-92a9-487d-8488-ee753adf1a27" data-loc="241:24-241:51" data-file-name="app/contact/page.tsx">Enterprise AI Implementation</option>
                        <option value="other" data-unique-id="2f667d66-f5d4-4caa-8125-b2c9190feed7" data-loc="242:24-242:46" data-file-name="app/contact/page.tsx">Other / Not Sure</option>
                      </select>
                      {errors.service && <p className="mt-1 text-sm text-red-500" data-unique-id="1c8b7bd5-759c-405f-9717-83d319e7547e" data-loc="244:41-244:82" data-file-name="app/contact/page.tsx">{errors.service.message}</p>}
                    </div>
                    
                    <div data-unique-id="e741ab7f-09cd-4fc6-99e5-4d3f3cc1a0c3" data-loc="247:20-247:25" data-file-name="app/contact/page.tsx">
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-1" data-unique-id="492e26cc-6aa7-49dd-ad61-394578f2c411" data-loc="248:22-248:103" data-file-name="app/contact/page.tsx">
                        Message <span className="text-red-500" data-unique-id="c0497f7b-ada9-41d8-9102-d128cfa17570" data-loc="249:32-249:63" data-file-name="app/contact/page.tsx">*</span>
                      </label>
                      <textarea id="message" rows={5} className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20`} placeholder="Tell us about your project or inquiry" {...register("message")} data-unique-id="88687c88-e925-48fe-b02c-0ef7e5f56adc" data-loc="251:22-251:289" data-file-name="app/contact/page.tsx"></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-500" data-unique-id="515abf0d-4761-4c4e-8af9-cbc6482b457c" data-loc="252:41-252:82" data-file-name="app/contact/page.tsx">{errors.message.message}</p>}
                    </div>
                    
                    <button type="submit" disabled={isSubmitting} className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium flex items-center justify-center w-full md:w-auto disabled:opacity-70" data-unique-id="cc40b394-79d0-44a3-83ef-e447617b9243" data-loc="255:20-255:254" data-file-name="app/contact/page.tsx">
                      {isSubmitting ? <>
                          <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2" data-unique-id="fcc5af43-d6d8-4d0a-a9f4-682e748fdf1e" data-loc="257:26-257:117" data-file-name="app/contact/page.tsx"></div>
                          Sending...
                        </> : <>
                          Send Message <Send size={16} className="ml-2" />
                        </>}
                    </button>
                  </form>}
              </motion.div>
              
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
            }} data-unique-id="fa1c4bf9-8896-4720-8afb-39148a0c0aee" data-loc="266:14-276:15" data-file-name="app/contact/page.tsx">
                <div className="rounded-lg overflow-hidden shadow-xl h-full" data-unique-id="091710ef-67f9-4420-bc72-4752362b0bdd" data-loc="277:16-277:77" data-file-name="app/contact/page.tsx">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968900465723!2d-122.39568492392044!3d37.78779791202492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c99%3A0x3947ba9fa9dbb742!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1682432939830!5m2!1sen!2sus" width="100%" height="100%" style={{
                  border: 0,
                  minHeight: "400px"
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-unique-id="570d90a4-c292-4a3b-88e0-c6667182710f" data-loc="278:18-281:94" data-file-name="app/contact/page.tsx"></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/30" data-unique-id="7e5fb180-9296-4c2c-abf2-2ec4badfa2f8" data-loc="289:8-289:51" data-file-name="app/contact/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="13ed68d2-eacd-4d39-bc50-0aa119acf05b" data-loc="290:10-290:50" data-file-name="app/contact/page.tsx">
            <div className="text-center mb-12" data-unique-id="f488a5c5-0bfe-4edc-8ce8-839d5070d49e" data-loc="291:12-291:47" data-file-name="app/contact/page.tsx">
              <h2 className="text-3xl font-bold text-primary mb-4" data-unique-id="855f3258-83b0-4ff1-a289-08e2a05712aa" data-loc="292:14-292:67" data-file-name="app/contact/page.tsx">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="53b82d38-e4fb-459e-99c0-0645c9ebc0f9" data-loc="293:14-293:69" data-file-name="app/contact/page.tsx">
                Find answers to common questions about our AI solutions and services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" data-unique-id="5d4955a1-3767-494d-8cd9-cea23166dd15" data-loc="298:12-298:85" data-file-name="app/contact/page.tsx">
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
            }} className="bg-white p-6 rounded-lg shadow-md border border-border" data-unique-id="995b9ffe-7759-4186-b899-0fd80f4b65aa" data-loc="299:14-309:82" data-file-name="app/contact/page.tsx">
                <h3 className="text-lg font-semibold text-primary mb-3" data-unique-id="f65455d5-7e16-4b54-8931-366b1e636d89" data-loc="310:16-310:72" data-file-name="app/contact/page.tsx">How quickly can you implement an AI solution with NETPUB compatibility?</h3>
                <p className="text-muted-foreground" data-unique-id="43662bf8-19b0-4aca-9eae-e202a2f21d3c" data-loc="311:16-311:53" data-file-name="app/contact/page.tsx">
                  Implementation timelines vary based on the complexity of your needs. NETPUB-compatible integrations typically take 3-6 weeks, while more complex enterprise solutions may take 2-4 months. Our team will provide a detailed timeline and implementation plan during our initial consultation.
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
              delay: 0.1
            }} viewport={{
              once: true
            }} className="bg-white p-6 rounded-lg shadow-md border border-border" data-unique-id="a70ee997-27f6-46bd-a5e2-b9b5c81596e6" data-loc="316:14-327:82" data-file-name="app/contact/page.tsx">
                <h3 className="text-lg font-semibold text-primary mb-3" data-unique-id="050e96a7-05d1-43d2-a9d4-c20003c81c44" data-loc="328:16-328:72" data-file-name="app/contact/page.tsx">Do I need technical expertise to use your AI solutions?</h3>
                <p className="text-muted-foreground" data-unique-id="346b9b93-1454-4ee4-adb7-2f555edcdead" data-loc="329:16-329:53" data-file-name="app/contact/page.tsx">
                  No, our solutions are designed with user-friendliness in mind. We provide comprehensive training and documentation, and our team handles the technical implementation. You'll have a dedicated support contact for any questions that arise.
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
            }} className="bg-white p-6 rounded-lg shadow-md border border-border" data-unique-id="8eda2063-12e8-424d-815a-5505b3507cf0" data-loc="334:14-345:82" data-file-name="app/contact/page.tsx">
                <h3 className="text-lg font-semibold text-primary mb-3" data-unique-id="073e28a2-59b6-40d8-8734-dfa95b66e14b" data-loc="346:16-346:72" data-file-name="app/contact/page.tsx">How do you ensure data privacy and security?</h3>
                <p className="text-muted-foreground" data-unique-id="8898eb98-c78c-4974-8645-384a85c29b5b" data-loc="347:16-347:53" data-file-name="app/contact/page.tsx">
                  We take data security seriously. All our solutions comply with industry standards and regulations. We use encryption for data in transit and at rest, implement strict access controls, and can sign custom data processing agreements to meet your specific requirements.
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
              delay: 0.3
            }} viewport={{
              once: true
            }} className="bg-white p-6 rounded-lg shadow-md border border-border" data-unique-id="a07c7ca3-48b0-424b-ae33-682c4df692b8" data-loc="352:14-363:82" data-file-name="app/contact/page.tsx">
                <h3 className="text-lg font-semibold text-primary mb-3" data-unique-id="0cfd99ec-27b9-495b-ba4c-ea421a91b573" data-loc="364:16-364:72" data-file-name="app/contact/page.tsx">Can your AI solutions integrate with our existing NETPUB systems?</h3>
                <p className="text-muted-foreground" data-unique-id="6a196e72-9f54-497d-9bb9-40cebc9fc8e4" data-loc="365:16-365:53" data-file-name="app/contact/page.tsx">
                  Absolutely. Our solutions are specifically designed to integrate seamlessly with NETPUB environments. We have extensive experience with CRM systems, ERP software, e-commerce platforms, content management systems, and custom applications within the NETPUB ecosystem. Our team will conduct a thorough assessment of your current infrastructure during the consultation phase to ensure compatibility.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground" data-unique-id="04d10f20-450b-4da3-97e2-a07ef911c402" data-loc="374:8-374:70" data-file-name="app/contact/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="4c6b6a84-6952-42d3-ba19-a1aafc4ecda8" data-loc="375:10-375:50" data-file-name="app/contact/page.tsx">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" data-unique-id="378bd7f1-9f34-492b-b3ec-6dfc5e0e9a5e" data-loc="376:12-376:90" data-file-name="app/contact/page.tsx">
              <div className="mb-6 md:mb-0 md:w-2/3" data-unique-id="a018627e-f0a0-4b98-b582-17274c9346f2" data-loc="377:14-377:53" data-file-name="app/contact/page.tsx">
                <h2 className="text-2xl md:text-4xl font-bold mb-4" data-unique-id="20c149b2-d1b8-42f4-ab84-748812eaf824" data-loc="378:16-378:68" data-file-name="app/contact/page.tsx">Ready to get started?</h2>
                <p className="text-primary-foreground/80 text-lg" data-unique-id="8e0b64fe-4844-44c1-b967-5adf4964c8f2" data-loc="379:16-379:66" data-file-name="app/contact/page.tsx">
                  Schedule a free consultation with our AI experts today.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-start md:justify-end" data-unique-id="f4532782-f4d1-4983-ad93-900abba7d111" data-loc="383:14-383:74" data-file-name="app/contact/page.tsx">
                <button onClick={() => document.getElementById('name')?.focus()} className="bg-white text-primary px-6 py-3 rounded-md hover:bg-white/90 transition-colors font-medium" data-unique-id="d7fe5e4c-435d-4cbc-9430-a83bb958df44" data-loc="384:16-384:184" data-file-name="app/contact/page.tsx">
                  Contact Us Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-8" data-unique-id="7fffb048-34a8-4b44-9996-ad3d073c5e75" data-loc="393:6-393:44" data-file-name="app/contact/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="82831e4e-6825-4fc8-bbc0-2052eddc1e61" data-loc="394:8-394:48" data-file-name="app/contact/page.tsx">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-unique-id="5c0a0999-b524-41fa-9f1f-284f182dc81a" data-loc="395:10-395:65" data-file-name="app/contact/page.tsx">
            <div data-unique-id="c66b8ecd-dfde-4612-85ee-86366e519d3f" data-loc="396:12-396:17" data-file-name="app/contact/page.tsx">
              <h3 className="text-lg font-bold text-primary mb-4" data-unique-id="4a1420d5-4bf5-4d08-9622-52afa94afc69" data-loc="397:14-397:66" data-file-name="app/contact/page.tsx">Amen</h3>
              <p className="text-muted-foreground" data-unique-id="bfa19e8b-833c-47b1-9b63-342f62b49f2b" data-loc="398:14-398:51" data-file-name="app/contact/page.tsx">
                Providing intelligent AI solutions for businesses of all sizes.
              </p>
            </div>
            <div data-unique-id="59d2e158-3bf8-4aed-8734-dccbbfa3304e" data-loc="402:12-402:17" data-file-name="app/contact/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="5f077fc6-e840-4ae1-9916-82d7282fddb3" data-loc="403:14-403:60" data-file-name="app/contact/page.tsx">Services</h4>
              <ul className="space-y-2" data-unique-id="1fb0f1ee-1e56-421a-9522-7b18ddd72764" data-loc="404:14-404:40" data-file-name="app/contact/page.tsx">
                <li data-unique-id="a10007da-8161-459c-9c9a-c4ad9ee959ea" data-loc="405:16-405:20" data-file-name="app/contact/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="66345540-1156-4e42-8307-ea6df315ade2" data-loc="405:20-405:93" data-file-name="app/contact/page.tsx">Natural Language Processing</a></li>
                <li data-unique-id="6146b0a4-49eb-4824-a09e-e5c549d52f17" data-loc="406:16-406:20" data-file-name="app/contact/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="0006f5e3-4c38-4390-9a27-c759c4dc9a92" data-loc="406:20-406:93" data-file-name="app/contact/page.tsx">Computer Vision</a></li>
                <li data-unique-id="a35acd67-21a8-41f8-bfd3-ed921c9fb38f" data-loc="407:16-407:20" data-file-name="app/contact/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="2d6aa472-423b-43c9-b948-acc4f1a35f83" data-loc="407:20-407:93" data-file-name="app/contact/page.tsx">Predictive Analytics</a></li>
                <li data-unique-id="34694a69-2d75-425e-a5f2-a3c5bc765357" data-loc="408:16-408:20" data-file-name="app/contact/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="76b684fe-ebe6-42a8-84aa-2f62dd5bd9b3" data-loc="408:20-408:93" data-file-name="app/contact/page.tsx">Custom AI Solutions</a></li>
              </ul>
            </div>
            <div data-unique-id="fb473eac-0bd7-45ed-b4a1-9b3085d32126" data-loc="411:12-411:17" data-file-name="app/contact/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="e6f55507-4dd2-4005-97b6-af7cbec89f9d" data-loc="412:14-412:60" data-file-name="app/contact/page.tsx">Company</h4>
              <ul className="space-y-2" data-unique-id="a808570b-12ae-4c2e-815c-363597351632" data-loc="413:14-413:40" data-file-name="app/contact/page.tsx">
                <li data-unique-id="0a13c721-db48-4dcb-8d0d-093c3ac02d5b" data-loc="414:16-414:20" data-file-name="app/contact/page.tsx"><a href="/about" className="text-muted-foreground hover:text-primary" data-unique-id="0ef7f062-9eb6-40f4-8c50-2a5e5a236370" data-loc="414:20-414:90" data-file-name="app/contact/page.tsx">About Us</a></li>
                <li data-unique-id="f9360341-9298-4c74-9f9b-2928883db715" data-loc="415:16-415:20" data-file-name="app/contact/page.tsx"><a href="/about" className="text-muted-foreground hover:text-primary" data-unique-id="9b91b50f-8ad6-40fa-99cf-2615e4e19cf9" data-loc="415:20-415:90" data-file-name="app/contact/page.tsx">Careers</a></li>
                <li data-unique-id="8ca539d6-35da-4aff-ac5d-4b43f0a2b2da" data-loc="416:16-416:20" data-file-name="app/contact/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="f902927b-4586-44c0-b6c0-7ac497d75b2c" data-loc="416:20-416:85" data-file-name="app/contact/page.tsx">Blog</a></li>
                <li data-unique-id="e944cda4-d3cb-42ea-ada8-e7666ce6b99b" data-loc="417:16-417:20" data-file-name="app/contact/page.tsx"><a href="/contact" className="text-muted-foreground hover:text-primary" data-unique-id="d2f2c752-1944-4bdf-ac0a-a43439854382" data-loc="417:20-417:92" data-file-name="app/contact/page.tsx">Contact</a></li>
              </ul>
            </div>
            <div data-unique-id="60ddc0c4-129d-428c-b713-cf34a79e84c0" data-loc="420:12-420:17" data-file-name="app/contact/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="07db3d4e-0642-4c92-ac2c-d84374b0a2bc" data-loc="421:14-421:60" data-file-name="app/contact/page.tsx">Legal</h4>
              <ul className="space-y-2" data-unique-id="b9708925-7699-4618-b1ba-4ab1c721d852" data-loc="422:14-422:40" data-file-name="app/contact/page.tsx">
                <li data-unique-id="3eb9f604-7c07-4705-8fb9-edd6b9aa1d70" data-loc="423:16-423:20" data-file-name="app/contact/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="7326cf59-99d0-470c-9fc1-8df3c2bbb533" data-loc="423:20-423:85" data-file-name="app/contact/page.tsx">Privacy Policy</a></li>
                <li data-unique-id="6c4b76e9-cb42-4ec9-99ae-481a266dc97b" data-loc="424:16-424:20" data-file-name="app/contact/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="7505e0c9-d981-4e35-b332-ac156ea79f92" data-loc="424:20-424:85" data-file-name="app/contact/page.tsx">Terms of Service</a></li>
                <li data-unique-id="fd35f28c-4817-4a42-83ee-27283f1905c9" data-loc="425:16-425:20" data-file-name="app/contact/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="a6837098-7638-491e-9b7b-af87bb1e5566" data-loc="425:20-425:85" data-file-name="app/contact/page.tsx">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center" data-unique-id="646e508f-5547-461e-b0f5-adc9d873edab" data-loc="429:10-429:72" data-file-name="app/contact/page.tsx">
            <div className="flex justify-center items-center mb-4" data-unique-id="10493fb1-0fc8-4a8a-b578-5930160b8e40" data-loc="430:12-430:67" data-file-name="app/contact/page.tsx">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-flex items-center" data-unique-id="ab29a221-bfbf-4698-8afe-3dfe77ce881e" data-loc="431:14-431:126" data-file-name="app/contact/page.tsx">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" data-unique-id="96bd33d3-9878-468d-be95-4a3e4f300454" data-loc="432:16-432:211" data-file-name="app/contact/page.tsx">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                NETPUB Compatible
              </div>
            </div>
            <p className="text-muted-foreground" data-unique-id="ddd0a840-f26b-4678-aef2-b2116431c300" data-loc="439:12-439:49" data-file-name="app/contact/page.tsx">&copy; {new Date().getFullYear()} Amen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}