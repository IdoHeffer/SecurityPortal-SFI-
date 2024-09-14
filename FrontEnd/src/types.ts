// src/types.ts

export interface Challenge {
    id: number;
    name: string;
    impact: number;
    urgency: number;
    volume: number;
    rank: number;
  }
  
  export interface Developer {
    name: string;
    rank: number;
    progress: number; // Progress towards the next level (0 to 100)
  }
  
  export interface PerformanceData {
    period: 'year' | 'month' | 'week' | 'day';
    tasksCompleted: number;
    teamTasksCompleted: number;
  }
  