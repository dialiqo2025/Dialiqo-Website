"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Share2,
  Copy,
  Check,
  Twitter,
  Linkedin,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Send,
  Search,
  Filter,
  Sparkles,
  BookOpen,
  Mail,
  Code,
  CheckCircle2,
  AlertTriangle,
  Info,
  Terminal,
  ExternalLink,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../components/common/Button';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { RESOURCES_DATA } from '../data/dialiqoData';
import { ResourceItem } from '../types';
import { pageToPath } from '@/lib/routes';
import { typo } from '@/lib/typography';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConsultation
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Comments state
  const [comments, setComments] = useState<
    { id: string; name: string; date: string; avatar: string; text: string; likes: number; isLiked?: boolean }[]
  >([
    {
      id: 'c1',
      name: 'Dr. Sarah Lin',
      date: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
      text: 'Extremely insightful breakdown on FreeSWITCH C-module audio piping! We faced similar WebSocket buffer overflow issues when testing at 50,000 active trunks. Implementing 20ms PCM frame slicing solved our jitter spikes immediately.',
      likes: 12
    },
    {
      id: 'c2',
      name: 'Marcus Brody',
      date: '1 day ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      text: 'Quick question regarding the VAD barge-in threshold: How does the spectral power monitor perform when background traffic noise (like emergency sirens or barking) enters the microphone input?',
      likes: 8
    }
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Find article by slug or default to first
  const post: ResourceItem = RESOURCES_DATA.find(r => r.slug === slug) || RESOURCES_DATA[0];

  // Calculate scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Detect active TOC heading
      if (post.toc) {
        for (const item of post.toc) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 0) {
              setActiveSection(item.id);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !newCommentName.trim()) return;

    setComments(prev => [
      {
        id: `c-${Date.now()}`,
        name: newCommentName,
        date: 'Just now',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
        text: newCommentText,
        likes: 0
      },
      ...prev
    ]);
    setNewCommentName('');
    setNewCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 4000);
  };

  const handleLikeComment = (id: string) => {
    setComments(prev =>
      prev.map(c => {
        if (c.id === id) {
          const isLiked = !c.isLiked;
          return { ...c, isLiked, likes: isLiked ? c.likes + 1 : c.likes - 1 };
        }
        return c;
      })
    );
  };

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const relatedPosts = RESOURCES_DATA.filter(r => r.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-24 pb-20 selection:bg-blue-500 selection:text-white">
      {/* 1. TOP READING PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          {/* Breadcrumb Back Button */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Engineering Blog</span>
          </Link>

          {/* Category & Tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold">
              {post.category}
            </span>
            {post.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className={`${typo.heroTitle} leading-tight text-white max-w-4xl`}>
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
            {/* Author Badge */}
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'}
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <div className="font-bold text-white text-sm">{post.author}</div>
                <div className="text-slate-400">{post.authorRole}</div>
              </div>
            </div>

            {/* Read Specs */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {post.publishedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> {post.commentsCount || 4} Comments
              </span>
            </div>
          </div>

          {/* Hero Banner Image */}
          {post.coverImage && (
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group mt-6">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-64 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800">
                Figure 1: Production Architecture Blueprint & Telemetry Pipeline
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. MAIN ARTICLE LAYOUT (WITH SIDEBAR TABLE OF CONTENTS & SOCIAL SHARING) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT STICKY SIDEBAR (TOC + SOCIAL SHARE) */}
        <aside className="lg:col-span-3 space-y-8 order-2 lg:order-1">
          <div className="sticky top-28 space-y-8">
            
            {/* Social Sharing Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className={`${typo.eyebrow} text-slate-500 dark:text-slate-400 font-mono`}>
                Share Article
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy link to clipboard"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`, '_blank')}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  title="Share on Twitter/X"
                >
                  <Twitter className="w-4 h-4" />
                </button>

                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-transparent hover:bg-slate-200'
                  }`}
                  title="Bookmark Article"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Table of Contents Box */}
            {post.toc && post.toc.length > 0 && (
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className={`${typo.eyebrow} text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5`}>
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" /> Table of Contents
                </div>
                <nav className="space-y-1.5 text-xs font-mono">
                  {post.toc.map(item => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all leading-snug ${
                        activeSection === item.id
                          ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 font-bold border-l-2 border-blue-500 pl-3'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Author Quick Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className={`${typo.eyebrow} text-slate-500 dark:text-slate-400 font-mono`}>
                Written By
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={post.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{post.author}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{post.authorRole}</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                {post.authorBio || 'Senior Telecommunications & AI Systems Engineer at Dialiqo.'}
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT ARTICLE BODY */}
        <main className="lg:col-span-9 space-y-12 order-1 lg:order-2">
          
          {/* Article Executive Summary */}
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-slate-800 dark:text-slate-200 leading-relaxed text-base sm:text-lg font-normal shadow-sm">
            <div className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 font-mono mb-2 flex items-center gap-1.5`}>
              <Sparkles className="w-4 h-4 text-blue-500" /> Key Takeaway Brief
            </div>
            {post.summary}
          </div>

          {/* Structured Sections */}
          {post.sections && post.sections.length > 0 ? (
            <div className="space-y-12 text-slate-800 dark:text-slate-200 leading-relaxed">
              {post.sections.map((sec, sIdx) => (
                <section id={sec.id} key={sIdx} className="space-y-6 scroll-mt-28">
                  <h2 className={`${typo.contentTitle} text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3`}>
                    {sec.title}
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                      {p}
                    </p>
                  ))}

                  {/* Callout Box */}
                  {sec.callout && (
                    <div
                      className={`p-6 rounded-2xl border space-y-2 ${
                        sec.callout.type === 'warning'
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200'
                          : sec.callout.type === 'architecture'
                          ? 'bg-blue-500/10 border-blue-500/30 text-blue-900 dark:text-blue-200'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                      }`}
                    >
                      <div className="font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        {sec.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                        {sec.callout.type === 'architecture' && <Terminal className="w-4 h-4 text-blue-500" />}
                        {sec.callout.type === 'tip' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                        <span>{sec.callout.title}</span>
                      </div>
                      <p className="text-sm leading-relaxed">{sec.callout.text}</p>
                    </div>
                  )}

                  {/* Code Snippet Box */}
                  {sec.codeSnippet && (
                    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
                      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-2 text-cyan-400 font-semibold">
                          <Code className="w-3.5 h-3.5" /> {sec.codeSnippet.filename || 'snippet.ts'}
                        </span>
                        <button
                          onClick={() => handleCopyCode(sec.codeSnippet!.code, `code-${sIdx}`)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                        >
                          {copiedCodeId === `code-${sIdx}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-5 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-slate-200">
                        <code>{sec.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Quote Block */}
                  {sec.quote && (
                    <blockquote className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 to-slate-900 border-l-4 border-cyan-400 italic text-lg text-slate-200 my-6 space-y-2">
                      <p>"{sec.quote.text}"</p>
                      <cite className="block text-xs font-mono font-bold text-cyan-300 not-italic">
                        &mdash; {sec.quote.author}
                      </cite>
                    </blockquote>
                  )}
                </section>
              ))}
            </div>
          ) : (
            <div className="text-base sm:text-lg leading-relaxed space-y-6 text-slate-700 dark:text-slate-300">
              <p>
                In high-scale telecommunications and generative voice AI, architects face strict physics constraints. Continuous streaming audio pipelines require zero-buffer sockets, hardware-backed voice activity detection, and regional co-location.
              </p>
              <p>
                By replacing traditional batch text pipelines with liquid WebSocket audio streams, response latency drops below 300ms, establishing true conversational parity.
              </p>
            </div>
          )}

          {/* COMMENTS & DISCUSSION PLACEHOLDER */}
          <section id="comments" className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className={`${typo.contentTitle} text-slate-900 dark:text-white flex items-center gap-2`}>
                <MessageSquare className="w-5 h-5 text-blue-500" /> Technical Discussion ({comments.length})
              </h3>
              <span className="text-xs font-mono text-slate-500">Moderated Engineering Community</span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Leave a Technical Question or Feedback</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={newCommentName}
                  onChange={e => setNewCommentName(e.target.value)}
                  placeholder="Your Name & Title (e.g. Alex, Telecom Lead)"
                  required
                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono border border-transparent focus:border-blue-500 focus:outline-none"
                />
              </div>

              <textarea
                value={newCommentText}
                onChange={e => setNewCommentText(e.target.value)}
                placeholder="Share your architectural observations or questions..."
                rows={3}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono border border-transparent focus:border-blue-500 focus:outline-none"
              />

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  Comments are reviewed for technical quality.
                </span>
                <Button type="submit" variant="primary" size="sm" className="cursor-pointer">
                  <Send className="w-3.5 h-3.5 inline mr-1.5" /> Post Comment
                </Button>
              </div>

              {commentSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Comment posted successfully!
                </div>
              )}
            </form>

            {/* Existing Comments List */}
            <div className="space-y-4">
              {comments.map(c => (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={c.avatar}
                        alt={c.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-300 dark:border-slate-700"
                      />
                      <div>
                        <div className="font-bold text-xs text-slate-900 dark:text-white">{c.name}</div>
                        <div className="text-[10px] font-mono text-slate-400">{c.date}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleLikeComment(c.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                        c.isLiked
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{c.likes}</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-12">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* RELATED ARTICLES */}
          <section className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <SectionHeader
              eyebrow="Recommended Reading"
              title="Related Engineering Briefings"
              description="Explore related technical deep dives into telecom infrastructure, AI security, and low-latency systems."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map(rel => (
                <Link
                  key={rel.id}
                  href={pageToPath('resource-detail', rel.slug)}
                  className="group block rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-500/80 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={rel.coverImage || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600'}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-900/90 text-[10px] font-mono text-cyan-300 border border-slate-700">
                      {rel.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                        {rel.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{rel.readTime}</span>
                      <span className="text-blue-500 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* NEWSLETTER SUBSCRIPTION BOX */}
          <section className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-400 text-xs font-mono font-bold border border-blue-800">
                <Mail className="w-3.5 h-3.5" /> Bi-Weekly Telecom & AI Research
              </div>
              <h3 className={`${typo.contentTitle} text-white`}>
                Subscribe to Dialiqo Engineering Briefings
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Join 14,000+ VoIP architects, AI researchers, and SREs receiving detailed technical case breakdowns, C-module optimizations, and benchmark reports directly to their inbox.
              </p>

              <form onSubmit={handleSubscribeNewsletter} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email address..."
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
                />
                <Button type="submit" variant="glow" className="cursor-pointer shrink-0">
                  Subscribe Free
                </Button>
              </form>

              {newsletterSubscribed && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing! Check your inbox for confirmation.
                </div>
              )}
            </div>
          </section>

          {/* CTA SECTION */}
          <CTASection onOpenConsultation={onOpenConsultation} />
        </main>
      </div>
    </div>
  );
};

/* BLOG LISTING PAGE */
export const BlogListingPage: React.FC<{
  onNavigate: (p: string, s?: string) => void;
  onOpenConsultation: () => void;
}> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Voice AI', 'VoIP & SIP', 'AI Security', 'Cloud Infrastructure'];

  const filteredPosts = RESOURCES_DATA.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = RESOURCES_DATA.find(r => r.featured) || RESOURCES_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Research & Benchmarks"
          title="Engineering Insights & Telecom Architecture"
          description="In-depth whitepapers, benchmark reports, and technical guides from Dialiqo's core VoIP, AI research, and infrastructure teams."
        />

        {/* Featured Article Banner */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3.5 py-1 rounded-full bg-blue-600 text-white font-bold">
                  Featured Article
                </span>
                <span className="text-cyan-400 font-bold">{featuredPost.category}</span>
                <span className="text-slate-400">&bull; {featuredPost.readTime}</span>
              </div>

              <h2 className={`${typo.heroTitle} leading-tight`}>
                {featuredPost.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredPost.summary}
              </p>

              {/* Author & Date */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img
                  src={featuredPost.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'}
                  alt={featuredPost.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <div className="font-bold text-sm text-white">{featuredPost.author}</div>
                  <div className="text-xs text-slate-400">{featuredPost.authorRole} &bull; {featuredPost.publishedDate}</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={pageToPath('resource-detail', featuredPost.slug)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={featuredPost.coverImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'}
                  alt={featuredPost.title}
                  className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800">
                  Sub-300ms Audio Pipeline Benchmarks
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search articles & tags..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 border border-transparent focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
            <Link
              href={pageToPath('resource-detail', post.slug)}
              className="block p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 hover:shadow-2xl transition-all flex flex-col justify-between group h-full"
            >
              <div className="space-y-4">
                {/* Cover Thumbnail */}
                {post.coverImage && (
                  <div className="rounded-2xl overflow-hidden h-48 border border-slate-100 dark:border-slate-800 relative">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-[11px] font-mono text-cyan-400 font-bold border border-slate-700">
                      {post.category}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{post.publishedDate}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug`}>
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'}
                    alt={post.author}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{post.author}</span>
                </div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read &rarr;
                </span>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <CTASection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
