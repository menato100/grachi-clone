"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight, MessageSquare, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModel, setActiveModel] = useState("gemini-2.0-flash-exp");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<{
    role: string;
    content: string;
  }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'text' | 'vision'>('text');
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    const newMessages = [...messages, {
      role: "user",
      content: inputText
    }];
    setMessages(newMessages);
    setInputText("");
    try {
      // Using the util.ts API as required
      const {
        generateText
      } = await import("@/lib/api/util");
      let responseText = "";
      const onChunk = (chunk: string) => {
        responseText += chunk;
        setMessages([...newMessages, {
          role: "assistant",
          content: responseText
        }]);
      };
      await generateTextStream(inputText, onChunk, activeModel);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages([...newMessages, {
        role: "assistant",
        content: "Sorry, I encountered an error processing your request."
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  const generateTextStream = async (prompt: string, onChunk: (text: string) => void, provider: string) => {
    try {
      const {
        generateTextStream
      } = await import("@/lib/api/util");
      await generateTextStream(prompt, onChunk, provider);
    } catch (error) {
      console.error("Error in text generation:", error);
      throw error;
    }
  };
  return <div className="min-h-screen flex flex-col bg-background" data-unique-id="b21e2ec1-9125-4bed-99cc-562d534d1902" data-loc="64:9-64:67" data-file-name="app/page.tsx">
      {/* Mobile Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border" data-unique-id="dbb7611e-3df6-412b-84ca-a0555c4dded6" data-loc="66:6-66:76" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center" data-unique-id="63e9186c-8de1-46b3-bea8-cdd51ac7958e" data-loc="67:8-67:87" data-file-name="app/page.tsx">
          <div className="flex items-center" data-unique-id="4f83e2ae-d596-4e13-afcb-c1781cffc7e1" data-loc="68:10-68:45" data-file-name="app/page.tsx">
            <h1 className="text-xl font-bold text-primary md:text-2xl" data-unique-id="29ec450e-880d-42f5-80be-4bbd47591757" data-loc="69:12-69:71" data-file-name="app/page.tsx">Amen</h1>
          </div>
          
          <button onClick={toggleMenu} className="p-2 md:hidden" aria-label="Toggle menu" data-unique-id="c64e6559-be64-48ee-a121-c133131c872c" data-loc="72:10-72:90" data-file-name="app/page.tsx">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className="hidden md:flex items-center space-x-6" data-unique-id="5af3ab7e-bf83-4382-ab8d-82687dddf24c" data-loc="76:10-76:65" data-file-name="app/page.tsx">
            <a href="/" className="text-primary hover:text-primary/80 font-medium" data-unique-id="66816986-5fe9-4328-8a37-5e33c2a5e149" data-loc="77:12-77:83" data-file-name="app/page.tsx">Home</a>
            <a href="/services" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="cb828a1c-f5a0-49f6-b969-40bd85db1c17" data-loc="78:12-78:97" data-file-name="app/page.tsx">Services</a>
            <a href="/about" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="e83d94ad-9772-4f7d-81f7-4082c320b5ea" data-loc="79:12-79:94" data-file-name="app/page.tsx">About</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary font-medium" data-unique-id="03c387fb-a933-485c-994b-a8128454840b" data-loc="80:12-80:96" data-file-name="app/page.tsx">Contact</a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors" data-unique-id="614517b0-1069-4926-860e-fd4813931c28" data-loc="81:12-81:126" data-file-name="app/page.tsx">
              Get Started
            </button>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-t border-border" data-unique-id="bf4e1ccf-183b-4ce7-9188-6676adb9b4df" data-loc="88:23-97:63" data-file-name="app/page.tsx">
            <div className="flex flex-col py-4 px-4 space-y-4" data-unique-id="9656ff5f-9014-44ce-809e-bb1e918ed01f" data-loc="98:12-98:63" data-file-name="app/page.tsx">
              <a href="/" className="text-primary font-medium py-2" data-unique-id="adfe1f62-190c-46c6-a550-1230b0ba821b" data-loc="99:14-99:68" data-file-name="app/page.tsx">Home</a>
              <a href="/services" className="text-muted-foreground font-medium py-2" data-unique-id="5febe080-3bb4-4cc9-a73f-1c6446723b36" data-loc="100:14-100:85" data-file-name="app/page.tsx">Services</a>
              <a href="/about" className="text-muted-foreground font-medium py-2" data-unique-id="82d6ca3a-bb08-402e-8809-6eaa5a28455b" data-loc="101:14-101:82" data-file-name="app/page.tsx">About</a>
              <a href="/contact" className="text-muted-foreground font-medium py-2" data-unique-id="a6c36d04-24df-4d07-ad2b-f88ad0bb6da2" data-loc="102:14-102:84" data-file-name="app/page.tsx">Contact</a>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors w-full" data-unique-id="0bdd99c6-95f2-41eb-9662-97e6e9545260" data-loc="103:14-103:135" data-file-name="app/page.tsx">
                Get Started
              </button>
            </div>
          </motion.div>}
      </header>

      <main className="flex-1" data-unique-id="83c73820-e8ea-4094-8feb-a2e697fe748c" data-loc="110:6-110:31" data-file-name="app/page.tsx">
        {/* Hero Section */}
        <section className="py-12 md:py-20" data-unique-id="c95e9cf9-53b7-4dc4-bd71-679d3cf16db5" data-loc="112:8-112:44" data-file-name="app/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="c0b886b2-e68e-413e-950f-c386899c4dd9" data-loc="113:10-113:50" data-file-name="app/page.tsx">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8" data-unique-id="53eba47b-7604-4ed9-bd4f-b7f0877b94fa" data-loc="114:12-114:84" data-file-name="app/page.tsx">
              <div className="md:w-1/2 mb-8 md:mb-0" data-unique-id="3c7ce73a-f87a-47ad-8c2a-345fb8e63a36" data-loc="115:14-115:53" data-file-name="app/page.tsx">
                <motion.h2 initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="text-3xl md:text-5xl font-bold text-primary mb-4" data-unique-id="893abef8-4c8f-4f9a-b8d5-3a037edb3930" data-loc="116:16-124:78" data-file-name="app/page.tsx">
                  Advanced AI Solutions for Enterprise Growth
                </motion.h2>
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }} className="text-muted-foreground text-lg mb-6" data-unique-id="9e87b9ce-8d46-4bf7-ba73-a32941e04b32" data-loc="127:16-136:64" data-file-name="app/page.tsx">
                  Harness the transformative power of artificial intelligence to optimize operations, enhance customer experiences, and drive sustainable business growth with our enterprise-grade solutions.
                </motion.p>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.4
              }} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" data-unique-id="d65c7e83-b05c-4c86-9d95-309c643c9928" data-loc="139:16-148:91" data-file-name="app/page.tsx">
                  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium" data-unique-id="8d147e07-4e30-43ed-8f89-4b21a21252d5" data-loc="149:18-149:144" data-file-name="app/page.tsx">
                    Try Demo
                  </button>
                  <button className="border border-border text-primary px-6 py-3 rounded-md hover:bg-secondary transition-colors font-medium flex items-center justify-center" data-unique-id="dc914bb0-c718-4e1b-aa65-b86835ed68b0" data-loc="152:18-152:175" data-file-name="app/page.tsx">
                    Learn More <ChevronRight size={16} className="ml-2" />
                  </button>
                </motion.div>
              </div>
              <div className="md:w-1/2" data-unique-id="46fe9934-e7c1-4975-9a87-283cf86eee76" data-loc="157:14-157:40" data-file-name="app/page.tsx">
                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} className="rounded-lg overflow-hidden shadow-xl" data-unique-id="5e819c67-69c3-407d-922f-e05716fb5a30" data-loc="158:16-167:66" data-file-name="app/page.tsx">
                  <img src="https://picsum.photos/200" alt="AI Technology" className="w-full h-auto object-cover rounded-lg shadow-lg" data-unique-id="10242f62-962a-487f-b10e-a43e6b76a4d0" data-loc="168:18-168:278" data-file-name="app/page.tsx" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Chat Demo Section */}
        <section className="py-12 bg-secondary/50" data-unique-id="c746dcae-3f58-442b-b90a-69c0ab96d675" data-loc="176:8-176:51" data-file-name="app/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="a28a662c-6a00-49c8-a7aa-1099a4e5bca9" data-loc="177:10-177:50" data-file-name="app/page.tsx">
            <div className="text-center mb-10" data-unique-id="fb2b81e0-f988-4bfa-89c7-95dee8494256" data-loc="178:12-178:47" data-file-name="app/page.tsx">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4" data-unique-id="361421fe-2b7f-4269-a9a7-83c5a0b4b560" data-loc="179:14-179:79" data-file-name="app/page.tsx">Experience Our Gemini 2.0 AI Assistant</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="a822f424-6547-4153-8f27-3f8e74bf20bd" data-loc="180:14-180:69" data-file-name="app/page.tsx">
                Interact with our state-of-the-art Gemini 2.0 AI model in this live demo. Ask complex questions, generate content, or get personalized assistance for your business needs.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-border" data-unique-id="0786f843-ce6c-471d-9297-4238993ff7f6" data-loc="185:12-185:114" data-file-name="app/page.tsx">
              {/* Chat Interface */}
              <div className="flex flex-col h-[600px] md:h-[500px]" data-unique-id="322f73fe-5741-4dd5-b6be-e45c8361b080" data-loc="187:14-187:68" data-file-name="app/page.tsx">
                {/* Model Selection */}
                <div className="bg-secondary/50 p-4 border-b border-border" data-unique-id="a16dfffe-e3bd-45a1-a2b7-e75164a3fdb6" data-loc="189:16-189:76" data-file-name="app/page.tsx">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" data-unique-id="c67f7115-d987-4c81-b40c-76ef515dac8f" data-loc="190:18-190:111" data-file-name="app/page.tsx">
                    <div className="flex items-center space-x-2" data-unique-id="0e32e15d-7d81-4c9a-8bfb-a3f23304dcd7" data-loc="191:20-191:65" data-file-name="app/page.tsx">
                      <div className="flex space-x-2" data-unique-id="2513e6c4-dfac-44f5-a5c2-93d441f17e80" data-loc="192:22-192:54" data-file-name="app/page.tsx">
                        <button onClick={() => setSelectedTab('text')} className={cn("px-3 py-1.5 rounded-md text-sm font-medium", selectedTab === 'text' ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-primary")} data-unique-id="b1efbd6b-1799-4b9e-95dc-53ded1807392" data-loc="193:24-193:253" data-file-name="app/page.tsx">
                          <MessageSquare size={16} className="inline mr-1.5" />
                          Text
                        </button>
                        <button onClick={() => setSelectedTab('vision')} className={cn("px-3 py-1.5 rounded-md text-sm font-medium", selectedTab === 'vision' ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-primary")} data-unique-id="3e066aab-8f0c-422c-a3a6-a62b01dbb578" data-loc="197:24-197:257" data-file-name="app/page.tsx">
                          <ImageIcon size={16} className="inline mr-1.5" />
                          Vision
                        </button>
                      </div>
                    </div>
                    
                    <div className="w-full sm:w-auto" data-unique-id="12c3139c-ca79-46e9-9587-dc8995b6e938" data-loc="204:20-204:54" data-file-name="app/page.tsx">
                      <select value={activeModel} onChange={e => setActiveModel(e.target.value)} className="w-full sm:w-auto bg-white border border-border rounded-md px-3 py-1.5 text-sm" data-unique-id="53f971b7-a34a-49ab-8f55-f148d86c2e23" data-loc="205:22-205:187" data-file-name="app/page.tsx">
                        <option value="gemini-2.0-flash-exp" data-unique-id="d99f0f33-aa3b-4fc1-995c-b2f6b2ea6e9b" data-loc="206:24-206:61" data-file-name="app/page.tsx">Gemini 2.0</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4" data-unique-id="01cc91f2-9adc-4b84-839d-3201467e7c88" data-loc="213:16-213:70" data-file-name="app/page.tsx">
                  {messages.length === 0 ? <div className="h-full flex items-center justify-center text-muted-foreground" data-unique-id="636722a1-abb5-402a-8ea1-10846e256439" data-loc="214:43-214:122" data-file-name="app/page.tsx">
                      <p data-unique-id="9313be94-10a3-4a3e-8cdf-69fb802fb1ad" data-loc="215:22-215:25" data-file-name="app/page.tsx">Start a conversation with the AI assistant</p>
                    </div> : messages.map((message, index) => <div key={index} className={cn("p-4 rounded-lg max-w-[85%]", message.role === "user" ? "bg-secondary ml-auto" : "bg-secondary/50 mr-auto")} data-unique-id="92db30d2-9b03-47c2-bcbf-cb2ec61c422a" data-loc="216:62-216:202" data-file-name="app/page.tsx">
                        <p className="whitespace-pre-wrap" data-unique-id="65227c37-accf-440a-999a-8a8fbae01ad4" data-loc="217:24-217:59" data-file-name="app/page.tsx">{message.content}</p>
                      </div>)}
                  {isLoading && <div className="bg-secondary/50 p-4 rounded-lg max-w-[85%] mr-auto" data-unique-id="38742ab3-d7b9-4a6b-a417-3bd3fb06c1dd" data-loc="219:32-219:100" data-file-name="app/page.tsx">
                      <div className="flex space-x-2" data-unique-id="3a557c93-a1ba-4edf-b4f5-8bb5a743d3e5" data-loc="220:22-220:54" data-file-name="app/page.tsx">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" data-unique-id="3027c862-76cc-4fc3-95d6-68680ac23a60" data-loc="221:24-221:97" data-file-name="app/page.tsx"></div>
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{
                      animationDelay: "0.2s"
                    }} data-unique-id="a7222b14-50bb-4422-bb7e-44cc175fad71" data-loc="222:24-224:23" data-file-name="app/page.tsx"></div>
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{
                      animationDelay: "0.4s"
                    }} data-unique-id="1df0854a-5dab-4972-a583-72fe48c675e9" data-loc="225:24-227:23" data-file-name="app/page.tsx"></div>
                      </div>
                    </div>}
                </div>
                
                {/* Input Area */}
                <div className="border-t border-border p-4" data-unique-id="ffaa4389-42bc-4855-8080-bdddbe715a18" data-loc="233:16-233:60" data-file-name="app/page.tsx">
                  <div className="flex space-x-2" data-unique-id="64fd909a-4fa1-4ac1-893a-f212379c4480" data-loc="234:18-234:50" data-file-name="app/page.tsx">
                    {selectedTab === 'vision' && <button className="p-2 bg-secondary rounded-md hover:bg-secondary/80" data-unique-id="f828d2bd-1975-4e58-bd79-ddd8e9f08aae" data-loc="235:49-235:119" data-file-name="app/page.tsx">
                        <ImageIcon size={20} className="text-muted-foreground" />
                      </button>}
                    <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }} placeholder="Type your message..." className="flex-1 bg-secondary/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20" data-unique-id="c7835410-3cd5-4c57-8d15-9cee60c25075" data-loc="238:20-243:189" data-file-name="app/page.tsx" />
                    <button onClick={handleSendMessage} disabled={!inputText.trim() || isLoading} className={cn("px-4 py-2 rounded-md font-medium", inputText.trim() && !isLoading ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-muted-foreground cursor-not-allowed")} data-unique-id="c566f7ea-2c8a-406f-a138-f35b0a46b5c1" data-loc="244:20-244:298" data-file-name="app/page.tsx">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20" data-unique-id="95c58ae6-8b91-4ecb-ba91-6f98045a2bc0" data-loc="255:8-255:44" data-file-name="app/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="015e972c-55ea-4347-b0fc-6e95fc34314f" data-loc="256:10-256:50" data-file-name="app/page.tsx">
            <div className="text-center mb-12" data-unique-id="334edb7c-bcd5-4be0-9393-0d914001aebb" data-loc="257:12-257:47" data-file-name="app/page.tsx">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4" data-unique-id="b08cddaf-771f-422b-a5de-85f5be899080" data-loc="258:14-258:79" data-file-name="app/page.tsx">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="1700977c-6b45-427a-b485-2bfa68855fb7" data-loc="259:14-259:69" data-file-name="app/page.tsx">
                Discover how our AI solutions can transform your business operations and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-unique-id="6088504d-8d71-4251-8248-bd0d48bd9e49" data-loc="264:12-264:82" data-file-name="app/page.tsx">
              {[{
              title: "Natural Language Processing",
              description: "Advanced text analysis and generation capabilities for content creation, summarization, and more.",
              icon: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            }, {
              title: "Computer Vision",
              description: "Image and video analysis for object detection, facial recognition, and visual content understanding.",
              icon: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
            }, {
              title: "Predictive Analytics",
              description: "Data-driven insights and forecasting to help you make informed business decisions.",
              icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            }, {
              title: "Enterprise AI Integration",
              description: "Seamless integration of AI capabilities into your existing business systems and workflows.",
              icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            }].map((feature, index) => <motion.div key={index} initial={{
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
            }} className="bg-white border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow" data-unique-id="f81cdf19-73e5-4d95-8809-aca7eaea08cc" data-loc="281:39-292:128" data-file-name="app/page.tsx">
                  <div className="h-48 overflow-hidden" data-unique-id="b5ae5d30-8eab-4072-84cb-7fbb334653f2" data-loc="293:18-293:56" data-file-name="app/page.tsx">
                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-cover" data-unique-id="da9625f5-e661-4c0a-b4c2-cc901efdd4fb" data-loc="294:20-294:105" data-file-name="app/page.tsx" />
                  </div>
                  <div className="p-6" data-unique-id="4d0f7f8a-a91f-412a-b6e7-f7c0aa207bd8" data-loc="296:18-296:39" data-file-name="app/page.tsx">
                    <h3 className="text-xl font-semibold text-primary mb-2" data-unique-id="f348d055-70ba-485f-9c83-0602e1953024" data-loc="297:20-297:76" data-file-name="app/page.tsx">{feature.title}</h3>
                    <p className="text-muted-foreground" data-unique-id="1da18776-98e3-4969-8cf5-b407033a3554" data-loc="298:20-298:57" data-file-name="app/page.tsx">{feature.description}</p>
                    <button className="mt-4 text-primary font-medium flex items-center hover:text-primary/80" data-unique-id="d9466b09-ebf0-4820-9dd2-eb6354f8ef98" data-loc="299:20-299:110" data-file-name="app/page.tsx">
                      Learn more <ChevronRight size={16} className="ml-1" data-unique-id={`60a628d1-225d-44b4-826e-900d33ddb6c0_${index}`} data-loc="300:33-300:76" data-file-name="app/page.tsx" />
                    </button>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-secondary/30" data-unique-id="0e484c67-5b68-4b4b-b205-c93c3c9652c3" data-loc="309:8-309:51" data-file-name="app/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="13ec55d3-3ac2-49eb-a5cd-f82c8cb1e69b" data-loc="310:10-310:50" data-file-name="app/page.tsx">
            <div className="text-center mb-12" data-unique-id="981ef1d7-3fbe-493f-8b52-3c04b02efa28" data-loc="311:12-311:47" data-file-name="app/page.tsx">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4" data-unique-id="5c5c25da-4d3b-48f8-9a0d-ea6637437f2c" data-loc="312:14-312:79" data-file-name="app/page.tsx">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-unique-id="bb7ad422-539a-4816-8662-ae96f4de4209" data-loc="313:14-313:69" data-file-name="app/page.tsx">
                Discover how our NETPUB-compatible AI solutions have transformed businesses across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-unique-id="7b0ddc3c-80a5-4b9e-be99-ddc4d90ab0e9" data-loc="318:12-318:67" data-file-name="app/page.tsx">
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
            }} className="bg-white p-8 rounded-lg shadow-md border border-border" data-unique-id="ba30f5bc-2d93-4440-8645-cf0369720ff8" data-loc="319:14-325:15" data-file-name="app/page.tsx">
                <div className="flex items-center mb-4" data-unique-id="0ab2c3da-49a0-492b-b26f-5f37dd7bc1e4" data-loc="326:16-326:56" data-file-name="app/page.tsx">
                  <div className="mr-4" data-unique-id="b44236ed-8f44-4584-b320-a9ebb44934f2" data-loc="327:18-327:40" data-file-name="app/page.tsx">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Client" className="w-16 h-16 rounded-full object-cover" data-unique-id="9dfd7980-b828-4c9d-8abf-717494b6676c" data-loc="328:20-332:22" data-file-name="app/page.tsx" />
                  </div>
                  <div data-unique-id="6613abf5-b8ae-461f-b8f3-7046fbda3efd" data-loc="334:18-334:23" data-file-name="app/page.tsx">
                    <h3 className="text-lg font-semibold text-primary" data-unique-id="aa2003b6-5880-4751-bee0-1f93df1f7293" data-loc="335:20-335:71" data-file-name="app/page.tsx">Michael Roberts</h3>
                    <p className="text-primary/70" data-unique-id="d83d8745-dfd2-4701-af5b-0a0c77b08fb7" data-loc="336:20-336:51" data-file-name="app/page.tsx">CTO, TechGlobal Inc.</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic" data-unique-id="6965ef25-f63a-4074-87dc-c2fda8a734ff" data-loc="339:16-339:60" data-file-name="app/page.tsx">
                  "Implementing Amen's AI solutions with our NETPUB infrastructure was seamless. Their team understood our complex requirements and delivered a solution that exceeded our expectations. We've seen a 40% increase in operational efficiency."
                </p>
                <div className="flex text-primary mt-4" data-unique-id="bb877d92-72b3-4d1d-b7bd-4c56ff754d11" data-loc="342:16-342:56" data-file-name="app/page.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="f2e87893-2fcb-4380-af58-dfb60c7d732a" data-loc="343:18-343:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="951fb479-d99f-4783-a890-54f86890b3c4" data-loc="346:18-346:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="97c3ed07-8fd6-4101-a491-366391a771df" data-loc="349:18-349:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="c3cb4e8f-446b-45da-b7a4-c2dbb7f3f153" data-loc="352:18-352:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="81532aca-64f9-4c71-b2e6-c668003373ef" data-loc="355:18-355:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
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
            }} className="bg-white p-8 rounded-lg shadow-md border border-border" data-unique-id="eb397002-4b2f-4363-9d69-8717e364f70a" data-loc="361:14-367:15" data-file-name="app/page.tsx">
                <div className="flex items-center mb-4" data-unique-id="d6b650be-eba3-4fa7-9308-1e30f9924e7f" data-loc="368:16-368:56" data-file-name="app/page.tsx">
                  <div className="mr-4" data-unique-id="fe315bdf-7a3e-42ff-b129-2a4ac8d74295" data-loc="369:18-369:40" data-file-name="app/page.tsx">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" alt="Client" className="w-16 h-16 rounded-full object-cover" data-unique-id="59086c36-b583-4987-a969-dfb7138e6056" data-loc="370:20-374:22" data-file-name="app/page.tsx" />
                  </div>
                  <div data-unique-id="a68f510b-b9ed-4669-a2e0-61ba83bf392f" data-loc="376:18-376:23" data-file-name="app/page.tsx">
                    <h3 className="text-lg font-semibold text-primary" data-unique-id="f7ea1601-7340-427b-af63-4db0b944f690" data-loc="377:20-377:71" data-file-name="app/page.tsx">Sarah Johnson</h3>
                    <p className="text-primary/70" data-unique-id="fae57a5f-33f2-4303-8dd5-a6fb8338ea21" data-loc="378:20-378:51" data-file-name="app/page.tsx">VP of Operations, RetailNow</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic" data-unique-id="4dd7f8ad-ace6-4345-b39e-a441be9ce98e" data-loc="381:16-381:60" data-file-name="app/page.tsx">
                  "The predictive analytics solution from Amen has transformed our inventory management. The NETPUB compatibility was crucial for our existing systems, and the implementation was smooth. We've reduced costs by 23% in just six months."
                </p>
                <div className="flex text-primary mt-4" data-unique-id="a3fc3936-04f0-45da-a32d-ee6cf193d598" data-loc="384:16-384:56" data-file-name="app/page.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="981f44ce-0f5f-4a05-8e8d-741535b93205" data-loc="385:18-385:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="c61639f7-4a88-4d93-863c-4b8128acda2b" data-loc="388:18-388:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="b7c2c732-34f7-4066-8580-22252728c3ba" data-loc="391:18-391:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="a6900d2f-45d8-4874-97ab-f55d3622f014" data-loc="394:18-394:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="ca893b11-994a-43aa-b64b-6c433df66489" data-loc="397:18-397:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
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
            }} className="bg-white p-8 rounded-lg shadow-md border border-border" data-unique-id="8da19a7e-bcc5-4889-8efb-7208419e0fa0" data-loc="403:14-409:15" data-file-name="app/page.tsx">
                <div className="flex items-center mb-4" data-unique-id="543494fb-b8c5-405a-b979-22faf2e2e8bf" data-loc="410:16-410:56" data-file-name="app/page.tsx">
                  <div className="mr-4" data-unique-id="1359f2f6-0f7f-45f9-8010-424df5e460aa" data-loc="411:18-411:40" data-file-name="app/page.tsx">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Client" className="w-16 h-16 rounded-full object-cover" data-unique-id="4f3bcb74-981d-441a-ad1b-5569b4ab76e9" data-loc="412:20-416:22" data-file-name="app/page.tsx" />
                  </div>
                  <div data-unique-id="3aa71d5b-0290-4fee-a4bd-df281e71b39a" data-loc="418:18-418:23" data-file-name="app/page.tsx">
                    <h3 className="text-lg font-semibold text-primary" data-unique-id="d0eb87dd-95a1-49f0-88dc-14cade2d5bd5" data-loc="419:20-419:71" data-file-name="app/page.tsx">David Wilson</h3>
                    <p className="text-primary/70" data-unique-id="cf819b38-9873-4e35-a8e0-0d07715dd169" data-loc="420:20-420:51" data-file-name="app/page.tsx">CEO, HealthTech Solutions</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic" data-unique-id="1d83a49c-9380-4458-893b-763643a476b5" data-loc="423:16-423:60" data-file-name="app/page.tsx">
                  "As a healthcare provider, data security and system compatibility were our top concerns. Amen's team delivered a NETPUB-compatible AI solution that not only met our strict compliance requirements but also improved our diagnostic accuracy by 35%."
                </p>
                <div className="flex text-primary mt-4" data-unique-id="a1442fdb-e4fa-4bd7-a789-a41dee49ba1b" data-loc="426:16-426:56" data-file-name="app/page.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="dd456145-b096-4c2a-a309-4a377583938d" data-loc="427:18-427:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="c342d8e2-e91b-42da-b436-b1d2c261456b" data-loc="430:18-430:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="42c65f68-ffc4-4eea-b41e-f08142233ed8" data-loc="433:18-433:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="42fced96-58bc-49a1-9972-0f0931cc85f1" data-loc="436:18-436:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1" data-unique-id="7889c095-c945-4184-b8f2-704c6f56993c" data-loc="439:18-439:138" data-file-name="app/page.tsx">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-primary text-primary-foreground" data-unique-id="f6cb3968-9b6d-4cdd-90d7-c0cee178904e" data-loc="449:8-449:79" data-file-name="app/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="c5397eb4-5718-49e7-bb6e-4d0d3a87082d" data-loc="450:10-450:50" data-file-name="app/page.tsx">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between" data-unique-id="59b30b1f-9242-4fce-b48c-30f9881a69e5" data-loc="451:12-451:90" data-file-name="app/page.tsx">
              <div className="mb-6 md:mb-0 md:w-2/3" data-unique-id="87c82c03-8e24-497b-bf0b-a2685a14268f" data-loc="452:14-452:53" data-file-name="app/page.tsx">
                <h2 className="text-2xl md:text-4xl font-bold mb-4" data-unique-id="b99211dc-20fb-4759-bdff-1ba4f1140a81" data-loc="453:16-453:68" data-file-name="app/page.tsx">Ready to revolutionize your business with AI?</h2>
                <p className="text-primary-foreground/80 text-lg" data-unique-id="d2ecea06-6a61-4bdf-b0f6-957106fc6f20" data-loc="454:16-454:66" data-file-name="app/page.tsx">
                  Schedule a personalized demo today and discover how our NETPUB-compatible solutions can transform your operations and drive growth.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-start md:justify-end" data-unique-id="4a50b0d5-e00e-4b9e-82c4-d52327def128" data-loc="458:14-458:74" data-file-name="app/page.tsx">
                <a href="/contact" className="bg-white text-primary px-6 py-3 rounded-md hover:bg-white/90 transition-colors font-medium inline-block" data-unique-id="e6040992-1bdd-410b-b561-9a72844d517b" data-loc="459:16-459:151" data-file-name="app/page.tsx">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-8" data-unique-id="41c214e2-1655-4b98-b83f-f16bb910ff9d" data-loc="468:6-468:44" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="828c6a6f-440b-4a84-a64c-da7f5d5d685c" data-loc="469:8-469:48" data-file-name="app/page.tsx">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-unique-id="f12d293f-103f-49f8-8a65-20f8476bff32" data-loc="470:10-470:65" data-file-name="app/page.tsx">
            <div data-unique-id="8cc48b16-f2a9-4414-af28-14260598337f" data-loc="471:12-471:17" data-file-name="app/page.tsx">
              <h3 className="text-lg font-bold text-primary mb-4" data-unique-id="4002fb6f-a925-4512-8888-ead64c1a875f" data-loc="472:14-472:66" data-file-name="app/page.tsx">Amen</h3>
              <p className="text-muted-foreground" data-unique-id="983a2c04-7d98-4ea0-bdb9-3fb966618332" data-loc="473:14-473:51" data-file-name="app/page.tsx">
                Providing intelligent AI solutions for businesses of all sizes.
              </p>
            </div>
            <div data-unique-id="53334bdb-a889-4039-9647-bd904ec27ae0" data-loc="477:12-477:17" data-file-name="app/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="c9de1496-0d7b-4efc-add2-4113e1b0ab49" data-loc="478:14-478:60" data-file-name="app/page.tsx">Services</h4>
              <ul className="space-y-2" data-unique-id="0a325b20-dac8-4ddf-aba5-1c0fc13930ed" data-loc="479:14-479:40" data-file-name="app/page.tsx">
                <li data-unique-id="1e352cca-7e99-4576-9f9f-71287e7a2116" data-loc="480:16-480:20" data-file-name="app/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="ad5c58b7-61fd-45e5-a123-161bf1f3a95a" data-loc="480:20-480:93" data-file-name="app/page.tsx">Natural Language Processing</a></li>
                <li data-unique-id="e4f30f09-0152-45cd-9ca6-3de22b3dff34" data-loc="481:16-481:20" data-file-name="app/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="1469bac2-6a22-49c5-8e7c-6ec0a70ec5be" data-loc="481:20-481:93" data-file-name="app/page.tsx">Computer Vision</a></li>
                <li data-unique-id="d3c3b8c3-44de-4d96-8948-19d28380ca8d" data-loc="482:16-482:20" data-file-name="app/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="e01279a7-27d8-438a-bef4-59ad97e82c84" data-loc="482:20-482:93" data-file-name="app/page.tsx">Predictive Analytics</a></li>
                <li data-unique-id="a2d550ed-b88b-436b-8267-8d78b3ff7165" data-loc="483:16-483:20" data-file-name="app/page.tsx"><a href="/services" className="text-muted-foreground hover:text-primary" data-unique-id="3136e89d-881d-4ade-9496-db4cff8840cf" data-loc="483:20-483:93" data-file-name="app/page.tsx">Custom AI Solutions</a></li>
              </ul>
            </div>
            <div data-unique-id="50f8f55c-f343-442b-b19e-684344531d0a" data-loc="486:12-486:17" data-file-name="app/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="36e85820-ccc4-480b-835d-4d959b95c9fe" data-loc="487:14-487:60" data-file-name="app/page.tsx">Company</h4>
              <ul className="space-y-2" data-unique-id="0c2caafa-e89e-42ba-94c5-00df11e720ff" data-loc="488:14-488:40" data-file-name="app/page.tsx">
                <li data-unique-id="b4385892-6eff-4a6e-a44f-d29bf8077cb0" data-loc="489:16-489:20" data-file-name="app/page.tsx"><a href="/about" className="text-muted-foreground hover:text-primary" data-unique-id="312f74fe-031f-4896-b9c0-20bb5a14ddf9" data-loc="489:20-489:90" data-file-name="app/page.tsx">About Us</a></li>
                <li data-unique-id="97d67229-7558-4129-bec4-5b58b58e8bb5" data-loc="490:16-490:20" data-file-name="app/page.tsx"><a href="/about" className="text-muted-foreground hover:text-primary" data-unique-id="ad9e9259-3610-438c-945e-8fe67f5b4fd8" data-loc="490:20-490:90" data-file-name="app/page.tsx">Careers</a></li>
                <li data-unique-id="884d40b5-b402-426f-ac44-af3c0abdc05e" data-loc="491:16-491:20" data-file-name="app/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="b7eab778-f764-4438-9554-4f6fb376821f" data-loc="491:20-491:85" data-file-name="app/page.tsx">Blog</a></li>
                <li data-unique-id="f4d56be7-18d9-47ef-9fec-a21550ef7a68" data-loc="492:16-492:20" data-file-name="app/page.tsx"><a href="/contact" className="text-muted-foreground hover:text-primary" data-unique-id="59647241-d4b3-4852-a903-fd6501a5380d" data-loc="492:20-492:92" data-file-name="app/page.tsx">Contact</a></li>
              </ul>
            </div>
            <div data-unique-id="87c76911-3366-4a83-8e5e-d4a35fb696ec" data-loc="495:12-495:17" data-file-name="app/page.tsx">
              <h4 className="font-medium text-primary mb-4" data-unique-id="d5ceaa93-121b-4ca4-9826-8b50c25fa288" data-loc="496:14-496:60" data-file-name="app/page.tsx">Legal</h4>
              <ul className="space-y-2" data-unique-id="f2b53aa3-0394-419c-a670-9413905bc7e3" data-loc="497:14-497:40" data-file-name="app/page.tsx">
                <li data-unique-id="17f5deb7-bac2-4576-94ff-0dcebecca0e2" data-loc="498:16-498:20" data-file-name="app/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="9c3e6cff-9213-4314-b34b-65d42d5c50e2" data-loc="498:20-498:85" data-file-name="app/page.tsx">Privacy Policy</a></li>
                <li data-unique-id="2345042f-ef84-4f36-9bfc-60c3158cc482" data-loc="499:16-499:20" data-file-name="app/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="08a88429-864a-4fcd-965a-15f51d06db3e" data-loc="499:20-499:85" data-file-name="app/page.tsx">Terms of Service</a></li>
                <li data-unique-id="628a1af0-ab7e-4087-9f18-1f915429e7ca" data-loc="500:16-500:20" data-file-name="app/page.tsx"><a href="#" className="text-muted-foreground hover:text-primary" data-unique-id="c2511976-a0be-422d-a12f-2defe68a44f8" data-loc="500:20-500:85" data-file-name="app/page.tsx">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center" data-unique-id="a0c3fe9b-9150-4168-9b35-4faa23723bcd" data-loc="504:10-504:72" data-file-name="app/page.tsx">
            <div className="flex justify-center items-center mb-4" data-unique-id="ec008e34-17cc-49f5-9d59-0db0dc48df54" data-loc="505:12-505:67" data-file-name="app/page.tsx">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-flex items-center" data-unique-id="67c8643b-e819-430b-815e-7d35682e2f0e" data-loc="506:14-506:126" data-file-name="app/page.tsx">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" data-unique-id="b97bb2ba-b4c4-440a-9a6f-fa7c06ff1047" data-loc="507:16-507:211" data-file-name="app/page.tsx">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                NETPUB Compatible
              </div>
            </div>
            <p className="text-muted-foreground" data-unique-id="b34c44d1-2e38-4f86-9d78-b723bc226747" data-loc="514:12-514:49" data-file-name="app/page.tsx">&copy; {new Date().getFullYear()} Amen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}