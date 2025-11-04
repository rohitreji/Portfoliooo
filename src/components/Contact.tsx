import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
	{
		icon: Mail,
		label: "Email",
		value: "r4rohitreji@gmail.com",
		href: "mailto:hello@portfolio.com",
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+91 6395209853",
		href: "tel:+15551234567",
	},
	{
		icon: MapPin,
		label: "Location",
		value: "India, Kerala",
		href: "#",
	},
];

export const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// API base (use Vite env if present, otherwise fallback)
	const API_BASE = (import.meta.env?.VITE_API_URL as string) ?? "http://localhost:4000";
	const APPS_SCRIPT_URL = `${API_BASE}/api/contact`;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const toastId = toast.loading("Sending message...");
		try {
			const res = await fetch(APPS_SCRIPT_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({
					name: formData.name.trim(),
					email: formData.email.trim(),
					message: formData.message.trim(),
				}),
			});

			if (!res.ok) {
				const txt = await res.text().catch(() => "");
				console.error("API error:", res.status, txt);
				toast.error(`Failed to send (status ${res.status})`);
				return;
			}

			const data = await res.json().catch(() => null);
			if (data?.status === "success") {
				toast.success("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			} else {
				console.error("Unexpected response:", data);
				toast.error("Failed to send message");
			}
		} catch (err) {
			console.error("Network error:", err);
			toast.error("Network error — see console");
		} finally {
			toast.dismiss(toastId);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
			</div>

			<div className="container mx-auto px-4 relative z-10" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
						Get In <span className="gradient-text">Touch</span>
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Having a project in mind? Let's work together to bring your vision to life
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold font-playfair mb-4">
								Let's Create Something Amazing
							</h3>
							<p className="text-muted-foreground">
								I'm always open to discussing new projects, creative ideas, or opportunities
								to be part of your vision. Feel free to reach out through any of the channels below.
							</p>
						</div>

						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								<motion.a
									key={info.label}
									href={info.href}
									initial={{ opacity: 0, x: -20 }}
									animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
									transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
									className="glass rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
								>
									<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
										<info.icon className="w-6 h-6 text-primary" />
									</div>

									<div>
										<p className="text-sm text-muted-foreground">{info.label}</p>
										<p className="font-medium">{info.value}</p>
									</div>
								</motion.a>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							className="glass rounded-xl p-6"
						>
							<p className="text-muted-foreground text-sm">
								<span className="text-primary font-semibold">Response Time:</span> I typically respond
								to all inquiries within 24 hours during business days.
							</p>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-2">
									Name
								</label>
								<Input
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your name"
									required
									className="bg-background/50"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-2">
									Email
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="your@email.com"
									required
									className="bg-background/50"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-2">
									Message
								</label>
								<Textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Tell me about your project..."
									rows={6}
									required
									className="bg-background/50 resize-none"
								/>
							</div>

							<Button type="submit" variant="hero" size="lg" className="w-full">
								<Send className="w-4 h-4 mr-2" />
								Send Message
							</Button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

