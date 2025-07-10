'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Send, Zap, Rocket, Briefcase, Star, Cloud, Smartphone, Monitor, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function WebCraftPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSite, setGeneratedSite] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState('');
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setCurrentStep('Analyzing prompt...');
    setProgress(0);
    
    // Add user message to chat history
    setChatHistory(prev => [...prev, { role: 'user', content: prompt }]);
    
    // Simulate LLM generation process
    const steps = [
      'Analyzing prompt...',
      'Detecting stack (React/Next.js)...',
      'Generating system prompt...',
      'Creating file structure...',
      'Writing component code...',
      'Setting up package.json...',
      'Installing dependencies...',
      'Starting development server...',
      'Rendering preview...'
    ];
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(steps[i]);
      setProgress(((i + 1) / steps.length) * 100);
    }
    
    // Generate different mock sites based on prompt
    const mockSites = {
      'todo': `
        <html>
          <head>
            <title>Todo List App</title>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; background: #f8fafc; }
              .container { max-width: 600px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
              h1 { color: #1e293b; margin-bottom: 24px; }
              .input-group { display: flex; gap: 12px; margin-bottom: 24px; }
              input { flex: 1; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; }
              button { background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; }
              button:hover { background: #2563eb; }
              .todo-item { display: flex; align-items: center; gap: 12px; padding: 12px; margin: 8px 0; background: #f8fafc; border-radius: 8px; }
              .todo-item.completed { opacity: 0.6; }
              .todo-item.completed span { text-decoration: line-through; }
              .delete-btn { background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>✅ Todo List</h1>
              <div class="input-group">
                <input type="text" placeholder="What needs to be done?" id="taskInput">
                <button onclick="addTask()">Add Task</button>
              </div>
              <div id="todoList">
                <div class="todo-item">
                  <input type="checkbox" onclick="toggleTask(this)">
                  <span>Learn React and Next.js</span>
                  <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                </div>
                <div class="todo-item completed">
                  <input type="checkbox" checked onclick="toggleTask(this)">
                  <span>Set up development environment</span>
                  <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                </div>
                <div class="todo-item">
                  <input type="checkbox" onclick="toggleTask(this)">
                  <span>Build amazing web apps</span>
                  <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                </div>
              </div>
            </div>
            <script>
              function addTask() {
                const input = document.getElementById('taskInput');
                const list = document.getElementById('todoList');
                if (input.value.trim()) {
                  const div = document.createElement('div');
                  div.className = 'todo-item';
                  div.innerHTML = \`
                    <input type="checkbox" onclick="toggleTask(this)">
                    <span>\${input.value}</span>
                    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                  \`;
                  list.appendChild(div);
                  input.value = '';
                }
              }
              function toggleTask(checkbox) {
                checkbox.parentElement.classList.toggle('completed', checkbox.checked);
              }
              function deleteTask(button) {
                button.parentElement.remove();
              }
            </script>
          </body>
        </html>
      `,
      'portfolio': `
        <html>
          <head>
            <title>Portfolio Website</title>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 0; background: #0f172a; color: #e2e8f0; }
              .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
              header { text-align: center; padding: 60px 0; }
              h1 { font-size: 48px; margin: 0; background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
              .subtitle { font-size: 18px; margin-top: 16px; color: #94a3b8; }
              .section { margin: 60px 0; }
              .section h2 { font-size: 24px; margin-bottom: 30px; color: #f1f5f9; }
              .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
              .project-card { background: #1e293b; padding: 24px; border-radius: 12px; border: 1px solid #334155; }
              .project-card h3 { color: #3b82f6; margin-top: 0; }
              .skills { display: flex; flex-wrap: gap; margin-top: 20px; }
              .skill { background: #1e40af; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; }
              .contact { text-align: center; background: #1e293b; padding: 40px; border-radius: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <header>
                <h1>John Developer</h1>
                <p class="subtitle">Full Stack Developer & UI/UX Designer</p>
              </header>
              
              <section class="section">
                <h2>About Me</h2>
                <p>I'm a passionate developer with 5 years of experience creating beautiful and functional web applications. I love working with modern technologies and solving complex problems.</p>
              </section>
              
              <section class="section">
                <h2>Featured Projects</h2>
                <div class="projects-grid">
                  <div class="project-card">
                    <h3>E-commerce Platform</h3>
                    <p>A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.</p>
                    <div class="skills">
                      <span class="skill">React</span>
                      <span class="skill">Node.js</span>
                      <span class="skill">PostgreSQL</span>
                    </div>
                  </div>
                  <div class="project-card">
                    <h3>Task Management App</h3>
                    <p>A collaborative task management application with real-time updates.</p>
                    <div class="skills">
                      <span class="skill">Next.js</span>
                      <span class="skill">Socket.io</span>
                      <span class="skill">MongoDB</span>
                    </div>
                  </div>
                  <div class="project-card">
                    <h3>Weather Dashboard</h3>
                    <p>A responsive weather dashboard with location-based forecasts.</p>
                    <div class="skills">
                      <span class="skill">Vue.js</span>
                      <span class="skill">API Integration</span>
                      <span class="skill">Charts</span>
                    </div>
                  </div>
                </div>
              </section>
              
              <section class="section">
                <div class="contact">
                  <h2>Get In Touch</h2>
                  <p>Let's work together on your next project!</p>
                  <p>📧 john@example.com | 🌐 github.com/johndeveloper</p>
                </div>
              </section>
            </div>
          </body>
        </html>
      `,
      'weather': `
        <html>
          <head>
            <title>Weather App</title>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #74b9ff, #0984e3); min-height: 100vh; }
              .container { max-width: 400px; margin: 0 auto; }
              .weather-card { background: rgba(255, 255, 255, 0.95); padding: 30px; border-radius: 20px; text-align: center; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); }
              .location { font-size: 24px; font-weight: bold; margin-bottom: 10px; color: #2d3436; }
              .date { color: #636e72; margin-bottom: 30px; }
              .weather-icon { font-size: 80px; margin: 20px 0; }
              .temperature { font-size: 48px; font-weight: bold; margin: 20px 0; color: #0984e3; }
              .description { font-size: 18px; color: #636e72; margin-bottom: 30px; }
              .details { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; }
              .detail-item { background: rgba(116, 185, 255, 0.1); padding: 15px; border-radius: 12px; }
              .detail-label { font-size: 12px; color: #636e72; text-transform: uppercase; }
              .detail-value { font-size: 18px; font-weight: bold; color: #2d3436; }
              .search-box { background: white; padding: 12px; border-radius: 25px; margin-bottom: 20px; display: flex; align-items: center; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
              .search-box input { flex: 1; border: none; outline: none; padding: 8px 16px; font-size: 16px; }
              .search-box button { background: #0984e3; color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="search-box">
                <input type="text" placeholder="Enter city name..." id="cityInput">
                <button onclick="searchWeather()">Search</button>
              </div>
              
              <div class="weather-card">
                <div class="location">New York, NY</div>
                <div class="date">Monday, Dec 9, 2024</div>
                <div class="weather-icon">☀️</div>
                <div class="temperature">72°F</div>
                <div class="description">Sunny</div>
                
                <div class="details">
                  <div class="detail-item">
                    <div class="detail-label">Humidity</div>
                    <div class="detail-value">65%</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">Wind Speed</div>
                    <div class="detail-value">8 mph</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">Pressure</div>
                    <div class="detail-value">30.2 in</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">UV Index</div>
                    <div class="detail-value">6</div>
                  </div>
                </div>
              </div>
            </div>
            
            <script>
              function searchWeather() {
                const city = document.getElementById('cityInput').value;
                if (city) {
                  // Simulate weather data update
                  document.querySelector('.location').textContent = city;
                  document.querySelector('.temperature').textContent = Math.floor(Math.random() * 40 + 40) + '°F';
                  const conditions = ['☀️ Sunny', '⛅ Partly Cloudy', '☁️ Cloudy', '🌧️ Rainy'];
                  const condition = conditions[Math.floor(Math.random() * conditions.length)];
                  document.querySelector('.weather-icon').textContent = condition.split(' ')[0];
                  document.querySelector('.description').textContent = condition.split(' ')[1];
                }
              }
            </script>
          </body>
        </html>
      `
    };
    
    // Determine which mock site to show based on prompt
    let siteKey: 'todo' | 'portfolio' | 'weather' = 'todo';
    if (prompt.toLowerCase().includes('portfolio')) siteKey = 'portfolio';
    else if (prompt.toLowerCase().includes('weather')) siteKey = 'weather';
    
    setGeneratedSite(mockSites[siteKey]);
    setChatHistory(prev => [...prev, { 
      role: 'assistant', 
      content: `I've created a fully functional ${siteKey} app for you! The app includes modern styling, interactive functionality, and a responsive design. You can see the live preview on the right.` 
    }]);
    setIsGenerating(false);
    setCurrentStep('');
    setProgress(0);
    setPrompt('');
  };

  const handleNewChat = () => {
    setChatHistory([]);
    setGeneratedSite('');
    setPrompt('');
  };

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  useEffect(() => {
    if (generatedSite && iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.srcdoc = generatedSite;
    }
  }, [generatedSite]);

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#F7F9FB' }}>
        {/* Clean background - no animated elements */}

        <div className="flex h-screen relative z-10">
          {/* Left Panel - Chat Interface */}
          <div className="w-1/2 flex flex-col border-r border-border backdrop-blur-sm animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-md border border-slate-200">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">WebCraft AI</h1>
                  <p className="text-sm text-slate-600">Create websites with AI</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100 border border-slate-200">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Home
                  </Button>
                </Link>
                <Button
                  onClick={handleNewChat}
                  variant="outline" 
                  size="sm"
                  className="border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                >
                  New Chat
                </Button>
              </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-custom">
              {chatHistory.length === 0 ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto border border-slate-200">
                      <Rocket className="w-10 h-10 text-slate-700" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-slate-900">Welcome to WebCraft AI</h2>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                    Describe the website you want to create, and I&apos;ll build it for you instantly with modern design and functionality!
                  </p>
                  
                  <div className="space-y-3 text-left max-w-lg mx-auto">
                    <div className="text-sm font-medium text-slate-700 mb-4">✨ Try these examples:</div>
                    <Card className="cursor-pointer hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-300 border border-slate-200 animate-slide-up group" 
                          onClick={() => handleExampleClick('Create a modern to-do list app with a clean design')}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-slate-900">Create a modern to-do list app</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-300 border border-slate-200 animate-slide-up group"
                          onClick={() => handleExampleClick('Build a portfolio website with dark theme')}
                          style={{ animationDelay: '0.1s' }}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                            <Star className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-slate-900">Build a portfolio website</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-300 border border-slate-200 animate-slide-up group"
                          onClick={() => handleExampleClick('Create a weather app with location detection')}
                          style={{ animationDelay: '0.2s' }}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                            <Cloud className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-slate-900">Create a weather app</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
            ) : (
              <div className="space-y-6">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`flex animate-slide-up ${message.role === 'user' ? 'justify-end' : 'justify-start'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className={`max-w-[85%] shadow-md transition-all duration-300 hover:shadow-lg ${
                      message.role === 'user' 
                        ? 'bg-slate-900 text-white border-slate-800' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === 'user' ? 'bg-white/20' : 'bg-slate-100'
                          }`}>
                            {message.role === 'user' ? (
                              <span className="text-sm font-bold text-white">U</span>
                            ) : (
                              <Zap className="w-4 h-4 text-slate-700" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="prose prose-sm max-w-none">
                              {message.content}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                
                {isGenerating && (
                  <div className="flex justify-start animate-slide-up">
                    <Card className="bg-white border-slate-200 max-w-[85%] shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-4 h-4 border-2 border-slate-600 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-slate-900">{currentStep}</span>
                            </div>
                            <div className="space-y-2">
                              <Progress value={progress} className="w-full h-2" />
                              <div className="flex justify-between text-xs text-slate-600">
                                <span>Generating your website...</span>
                                <span>{Math.round(progress)}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Form */}
          <div className="p-6 border-t border-slate-200 bg-white shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the website you want to create..."
                    className="min-h-[90px] max-h-[160px] resize-none pr-16 border-slate-300 focus:border-slate-500 bg-white text-slate-900 placeholder:text-slate-500 shadow-sm"
                    disabled={isGenerating}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                      }
                    }}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-slate-500 font-mono">
                    {prompt.length}/1000
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isGenerating || !prompt.trim()}
                  className="px-8 self-end bg-slate-900 hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 border-0"
                  size="lg"
                >
                  {isGenerating ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Generating</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Generate</span>
                    </div>
                  )}
                </Button>
              </div>
              <div className="text-xs text-slate-600 mt-3 flex items-center justify-between">
                <span>💡 Press Enter to send, Shift+Enter for new line</span>
                <span>✨ AI-powered website generation</span>
              </div>
            </form>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-1/2 flex flex-col backdrop-blur-sm">
          {/* Preview Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                {generatedSite && <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-sm"></div>}
              </div>
              <div>
                <span className="text-lg font-semibold text-slate-900">Live Preview</span>
                {generatedSite && (
                  <Badge variant="outline" className="ml-3 bg-emerald-50 text-emerald-600 border-emerald-200">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                    Live
                  </Badge>
                )}
              </div>
            </div>
            
            {generatedSite && (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-400 hover:bg-slate-50">
                  <Smartphone className="w-4 h-4 mr-1" />
                  Mobile
                </Button>
                <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-400 hover:bg-slate-50">
                  <Monitor className="w-4 h-4 mr-1" />
                  Desktop
                </Button>
                <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-400 hover:bg-slate-50">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Open
                </Button>
              </div>
            )}
          </div>

          {/* Preview Content */}
          <div className="flex-1 p-6 bg-slate-50 backdrop-blur-sm">
            {generatedSite ? (
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 animate-slide-up">
                <iframe
                  ref={iframeRef}
                  className="w-full h-full border-0"
                  title="Generated Website Preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center animate-fade-in">
                <div className="max-w-md">
                  <div className="relative mb-8">
                    <div className="w-40 h-40 bg-white rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm border border-slate-200 shadow-sm">
                      <Monitor className="w-20 h-20 text-slate-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-slate-900">No Preview Yet</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Your generated website will appear here in real-time. Start by describing what you want to build!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
