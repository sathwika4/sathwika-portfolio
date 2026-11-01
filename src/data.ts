export const socialLinks = {
  github: 'https://github.com/sathwika4',
  linkedin: 'https://www.linkedin.com/in/sathwika-bejjanki-57646a322/',
  email: 'mailto:sathwikabejjankii@gmail.com',
}

export const skillGroups = [
  { label: 'Programming', icon: '⌘', items: ['Python', 'C', 'JavaScript'] },
  { label: 'AI / ML', icon: '◈', items: ['Machine Learning', 'Deep Learning', 'NLP', 'Scikit-learn', 'NLTK', 'Pandas', 'NumPy'] },
  { label: 'Web & Backend', icon: '⌁', items: ['HTML', 'CSS', 'React', 'Flask', 'FastAPI'] },
  { label: 'Core CS & Databases', icon: '▦', items: ['Data Structures & Algorithms', 'SQL', 'MySQL'] },
  { label: 'Tools & Visualization', icon: '◌', items: ['Git', 'GitHub', 'Power BI'] },
]

export type Project = {
  title: string
  shortTitle: string
  category: string
  type: string
  description: string
  technologies: string[]
  achievement?: string
  details: string[]
  accent: string
}

export const projects: Project[] = [
  {
    title: 'Thermal & Atmospheric Advisory Platform',
    shortTitle: 'TAAP',
    category: 'AI for good',
    type: 'Team project',
    description: 'A platform that translates weather and environmental conditions into localized heat-health risk insights and advisories.',
    technologies: ['Environmental data', 'Risk insights', 'Advisories'],
    achievement: 'Smart India Hackathon internal selection',
    details: ['Contributed to a team-built platform focused on making environmental conditions easier to understand.', 'The project was selected through the university’s internal Smart India Hackathon process.'],
    accent: 'blue',
  },
  {
    title: 'WellBe',
    shortTitle: 'WellBe',
    category: 'Conversational AI',
    type: 'Individual project',
    description: 'An NLP-based symptom-checking conversational application that processes user input and generates dynamic responses.',
    technologies: ['Python', 'Flask', 'NLTK', 'Pandas'],
    details: ['Developed text preprocessing, intent parsing, and entity extraction with NLTK.', 'Used Python, Flask, and Pandas to process symptom data and generate responses.'],
    accent: 'purple',
  },
  {
    title: 'Medical Insurance Cost Predictor',
    shortTitle: 'Insurance predictor',
    category: 'Machine learning',
    type: 'Individual project',
    description: 'A prediction pipeline that compares multiple models to estimate medical insurance charges from structured data.',
    technologies: ['Python', 'Scikit-learn', 'Linear Regression', 'Random Forest', 'XGBoost'],
    details: ['Built preprocessing and feature encoding steps with Python and Scikit-learn.', 'Compared Linear Regression, Random Forest, and XGBoost, identifying XGBoost as the best-performing model.'],
    accent: 'cyan',
  },
  {
    title: 'Cricket Performance Dashboard',
    shortTitle: 'Cricket dashboard',
    category: 'Data visualization',
    type: 'Individual project',
    description: 'An interactive Power BI dashboard for analyzing cricket scores and run trends through visual storytelling.',
    technologies: ['Power BI', 'Data visualization'],
    details: ['Created an interactive dashboard that turns cricket score data into clear visual insights.', 'Focused on exploring score patterns and run trends.'],
    accent: 'orange',
  },
  {
    title: 'Student Query & Helpdesk System',
    shortTitle: 'Helpdesk system',
    category: 'Web development',
    type: 'Individual project',
    description: 'A web application for students to submit subject-related queries with a responsive faculty-facing review interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    details: ['Built the student submission flow and faculty-facing interface.', 'Implemented the frontend functionality using JavaScript with responsive layouts.'],
    accent: 'green',
  },
]

export const achievements = [
  { title: 'Smart India Hackathon', eyebrow: 'Internal selection', text: 'Team project selected through the university’s internal selection process.', icon: '✦' },
  { title: 'SNIST Hackathon', eyebrow: 'National-level participant', text: 'Participated in a national-level hackathon at Sreenidhi Institute of Science and Technology, Hyderabad.', icon: '↗' },
  { title: 'Vice Chair — SRU Coding Club', eyebrow: 'Leadership', text: 'Support hackathons and technical events, encourage student participation, and contribute to club activities.', icon: '◎' },
]
