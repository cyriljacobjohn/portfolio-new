"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaLaptop,
} from "react-icons/fa";
import RippleButton from "@/components/RippleButton";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-32 px-6">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Got a question? Send me a message, and I&apos;ll get back to you soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl rounded-3xl border border-border bg-gradient-to-br from-secondary/70 via-secondary/40 to-secondary/70 p-8 backdrop-blur-lg space-y-10"
        >
          {/* Get in Touch form */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              Have something to discuss? Send me a message and let&apos;s talk.
            </p>

            <form onSubmit={onSubmit} className="space-y-4 text-left">
              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-lg bg-primary/60 border border-border text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-lg bg-primary/60 border border-border text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                />
              </div>

              <div className="relative">
                <FaCommentDots className="absolute left-4 top-4 text-accent" />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-lg bg-primary/60 border border-border text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 py-3 text-primary font-semibold glow-hover disabled:opacity-70"
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "ok" && (
                <p className="text-sm text-green-400 pt-2">
                  Message sent. I’ll get back to you soon.
                </p>
              )}
              {status === "err" && (
                <p className="text-sm text-red-400 pt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Connect With Me card */}
          <div className="rounded-2xl bg-primary/50 border border-border p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="block w-1.5 h-4 bg-accent rounded"></span>
              <h4 className="text-xl font-semibold text-white">Connect With Me</h4>
            </div>

            <RippleButton
              href="https://www.linkedin.com/in/cyriljacobjohn/"
              className="flex items-center justify-between w-full p-4 rounded-lg bg-secondary/50 border border-border text-gray-300 hover:text-white glow-hover"
            >
              <span className="flex items-center gap-3">
                <FaLinkedin className="text-accent2 text-xl" />
                <div>
                  <p className="font-medium">Let&apos;s Connect</p>
                  <p className="text-xs text-gray-400">on LinkedIn</p>
                </div>
              </span>
              <FaArrowRight className="text-gray-400 group-hover:text-accent2" />
            </RippleButton>

            <RippleButton
              href="https://dev.to/cyril_john"
              className="flex items-center justify-between w-full p-4 rounded-lg bg-secondary/50 border border-border text-gray-300 hover:text-white glow-hover"
            >
              <span className="flex items-center gap-3">
                <FaLaptop className="text-accent2 text-xl" />
                <div>
                  <p className="font-medium">Blog</p>
                  <p className="text-xs text-gray-400">@cyril_john</p>
                </div>
              </span>
              <FaArrowRight className="text-gray-400 group-hover:text-accent2" />
            </RippleButton>

            <RippleButton
              href="https://github.com/cyriljacobjohn"
              className="flex items-center justify-between w-full p-4 rounded-lg bg-secondary/50 border border-border text-gray-300 hover:text-white glow-hover"
            >
              <span className="flex items-center gap-3">
                <FaGithub className="text-accent2 text-xl" />
                <div>
                  <p className="font-medium">Github</p>
                  <p className="text-xs text-gray-400">@cyriljacobjohn</p>
                </div>
              </span>
              <FaArrowRight className="text-gray-400 group-hover:text-accent2" />
            </RippleButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
