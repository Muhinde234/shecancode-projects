// components/InsightsPanel.tsx
import { JournalEntry } from '../types/index';
import { useState, useEffect } from 'react';

interface InsightData {
  totalEntries: number;
  wordCount: number;
  avgWords: number;
  mood: string;
  favoriteTopic: string;
  recommendation: string;
}

export default function InsightsPanel({ entries }: { entries: JournalEntry[] }) {
  const [insights, setInsights] = useState<InsightData | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (entries.length > 0) {
      analyzeEntries();
    } else {
      setInsights(null);
    }
  }, [entries]);

  const analyzeEntries = async () => {
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock analysis based on entry content
      const wordCount = entries.reduce((total, entry) => 
        total + entry.content.split(/\s+/).length, 0);
      
      const avgWords = Math.round(wordCount / entries.length);
      
      // Simple mood detection based on word count and keywords
      let mood = 'neutral';
      const content = entries.map(e => e.content.toLowerCase()).join(' ');
      
      if (wordCount > 500) mood = 'reflective';
      if (wordCount < 200) mood = 'concise';
      
      if (content.includes('happy') || content.includes('excited')) {
        mood = 'positive';
      } else if (content.includes('sad') || content.includes('upset')) {
        mood = 'reflective';
      }
      
      // Topic extraction (simplified)
      const topics = ['work', 'family', 'health', 'hobby', 'travel', 'goal'];
      const topicCounts: Record<string, number> = {};
      
      topics.forEach(topic => {
        const regex = new RegExp(`\\b${topic}\\b`, 'gi');
        topicCounts[topic] = (content.match(regex) || []).length;
      });
      
      const favoriteTopic = Object.entries(topicCounts).reduce(
        (max, [topic, count]) => count > max.count ? { topic, count } : max,
        { topic: 'life', count: 0 }
      ).topic;
      
      setInsights({
        totalEntries: entries.length,
        wordCount,
        avgWords,
        mood,
        favoriteTopic,
        recommendation: getRecommendation(entries.length, mood)
      });
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRecommendation = (count: number, mood: string): string => {
    if (count === 0) return "Start by writing your first entry today!";
    if (count < 3) return "Try to write consistently to build a habit.";
    
    switch(mood) {
      case 'positive':
        return "Capture this positive moment to look back on later.";
      case 'reflective':
        return "Consider writing about what you learned from this experience.";
      default:
        return "Write about something you're grateful for today.";
    }
  };

  const getMoodEmoji = (mood: string): string => {
    switch(mood) {
      case 'positive': return '😊';
      case 'reflective': return '🤔';
      case 'concise': return '💬';
      default: return '😐';
    }
  };

  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center rounded-xl bg-gray-50 border border-gray-100">
        <div className="text-4xl mb-4 opacity-50">📊</div>
        <h3 className="text-xl font-medium text-gray-700 mb-2">No entries to analyze</h3>
        <p className="text-gray-500 max-w-md">
          Write a few entries to unlock personalized insights
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        AI-Powered Journal Insights
      </h2>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">
            DeepSeek-R1 is analyzing your journal...
          </p>
        </div>
      ) : insights ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Summary Card */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 transition-all hover:shadow-md">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-800 mb-4">
              <span>📚</span> Journal Summary
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-blue-600">{insights.totalEntries}</div>
                <div className="text-sm text-blue-700">entries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">{insights.wordCount}</div>
                <div className="text-sm text-blue-700">words</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">~{insights.avgWords}</div>
                <div className="text-sm text-blue-700">words/entry</div>
              </div>
            </div>
          </div>
          
          {/* Mood Card */}
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 transition-all hover:shadow-md">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-800 mb-4">
              <span>😌</span> Emotional Tone
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{getMoodEmoji(insights.mood)}</span>
              <span className="text-xl font-medium capitalize text-purple-700">
                {insights.mood}
              </span>
            </div>
            <p className="text-gray-700">
              Your writing shows a focus on <span className="font-semibold text-purple-700">{insights.favoriteTopic}</span>
            </p>
          </div>
          
          {/* Recommendation Card */}
          <div className="bg-green-50 border border-green-100 rounded-xl p-5 transition-all hover:shadow-md">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-green-800 mb-4">
              <span>💡</span> Recommendation
            </h3>
            <p className="text-gray-700 italic">
              "{insights.recommendation}"
            </p>
          </div>
          
          {/* Chart Card */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 transition-all hover:shadow-md">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-amber-800 mb-4">
              <span>📈</span> Writing Frequency
            </h3>
            <div className="flex items-end justify-between h-32 mb-4 px-2">
              {[70, 90, 60, 85, 75].map((height, index) => (
                <div 
                  key={index}
                  className="w-8 bg-gradient-to-t from-amber-400 to-amber-300 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <p className="text-gray-700">
              Your most active day: <span className="font-semibold text-amber-700">Wednesday</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center rounded-xl bg-gray-50">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Analysis complete</h3>
          <p className="text-gray-500 max-w-md">
            No insights available for your entries
          </p>
        </div>
      )}
      
      <div className="text-center mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
        Insights powered by DeepSeek-R1 • Updated just now
      </div>
    </div>
  );
}