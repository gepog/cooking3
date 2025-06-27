import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Future of AI',
  description: 'Explore the cutting-edge developments in artificial intelligence and machine learning that are shaping our world.',
  genre: ['Technology', 'Documentary'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: '/src/assets/1.jpg',
  backdrop: '/src/assets/1.jpg',
  videoUrl: '/src/assets/sample-video.mp4',
  trailerUrl: '/src/assets/sample-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Neural Networks Explained',
    description: 'A comprehensive guide to understanding neural networks and deep learning algorithms.',
    genre: ['Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Machine Learning Basics',
    description: 'Learn the fundamentals of machine learning and its real-world applications.',
    genre: ['Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'AI in Healthcare',
    description: 'Discover how artificial intelligence is revolutionizing the healthcare industry.',
    genre: ['Documentary', 'Healthcare'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 55m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1034
  },
  {
    id: '4',
    title: 'Robotics Revolution',
    description: 'Explore the latest advances in robotics and automation technology.',
    genre: ['Technology', 'Documentary'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 623
  },
  {
    id: '5',
    title: 'Quantum Computing',
    description: 'Understanding the principles and potential of quantum computing technology.',
    genre: ['Science', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 50m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 445
  },
  {
    id: '6',
    title: 'Data Science Fundamentals',
    description: 'Master the essential skills and tools for modern data science.',
    genre: ['Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 20m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 789
  },
  {
    id: '7',
    title: 'Blockchain Technology',
    description: 'Learn about blockchain, cryptocurrencies, and decentralized systems.',
    genre: ['Technology', 'Finance'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 40m',
    thumbnail: '/src/assets/12.jpg',
    backdrop: '/src/assets/12.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 567
  },
  {
    id: '8',
    title: 'Cybersecurity Essentials',
    description: 'Protect yourself and your organization from cyber threats.',
    genre: ['Technology', 'Security'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 0m',
    thumbnail: '/src/assets/13.jpg',
    backdrop: '/src/assets/13.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 912
  },
  {
    id: '9',
    title: 'Cloud Computing Guide',
    description: 'Navigate the world of cloud services and infrastructure.',
    genre: ['Technology', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    thumbnail: '/src/assets/14.jpg',
    backdrop: '/src/assets/14.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 678
  },
  {
    id: '10',
    title: 'IoT and Smart Cities',
    description: 'How Internet of Things is transforming urban environments.',
    genre: ['Technology', 'Urban Planning'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/15.jpg',
    backdrop: '/src/assets/15.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 534
  }
];

// Custom content for specific rows
const boltMovies: Movie[] = [
  {
    id: 'bolt-1',
    title: 'Building with Bolt.new',
    description: 'Learn how to create amazing web applications with Bolt.new\'s AI-powered development platform.',
    genre: ['Technology', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/src/assets/31.png',
    backdrop: '/src/assets/31.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1156
  },
  {
    id: 'bolt-2',
    title: 'AI-Powered Development',
    description: 'Discover the future of coding with AI assistance and automated development workflows.',
    genre: ['Technology', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/32.png',
    backdrop: '/src/assets/32.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 987
  },
  {
    id: 'bolt-3',
    title: 'Full-Stack in Minutes',
    description: 'From idea to deployment: building complete applications in record time.',
    genre: ['Technology', 'Tutorial'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: '/src/assets/33.png',
    backdrop: '/src/assets/33.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 823
  }
];

const expoMovies: Movie[] = [
  {
    id: 'expo-1',
    title: 'React Native with Expo',
    description: 'Build cross-platform mobile apps with React Native and Expo\'s powerful toolchain.',
    genre: ['Mobile', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/src/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
    backdrop: '/src/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 745
  },
  {
    id: 'expo-2',
    title: 'Mobile App Development',
    description: 'From prototype to production: the complete mobile development workflow.',
    genre: ['Mobile', 'Tutorial'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: '/src/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
    backdrop: '/src/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 892
  },
  {
    id: 'expo-3',
    title: 'Cross-Platform Excellence',
    description: 'Write once, run everywhere: mastering cross-platform mobile development.',
    genre: ['Mobile', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: '/src/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    backdrop: '/src/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 634
  }
];

const revenueCatMovies: Movie[] = [
  {
    id: 'revenuecat-1',
    title: 'Subscription Management',
    description: 'Master in-app purchases and subscription management with RevenueCat.',
    genre: ['Business', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    thumbnail: '/src/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    backdrop: '/src/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 567
  },
  {
    id: 'revenuecat-2',
    title: 'Monetization Strategies',
    description: 'Optimize your app\'s revenue with proven monetization strategies and analytics.',
    genre: ['Business', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
    backdrop: '/src/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 423
  },
  {
    id: 'revenuecat-3',
    title: 'App Store Optimization',
    description: 'Maximize your app\'s visibility and conversion rates in app stores.',
    genre: ['Marketing', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: '/src/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
    backdrop: '/src/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 789
  }
];

const tavusMovies: Movie[] = [
  {
    id: 'tavus-1',
    title: 'AI Video Generation',
    description: 'Create personalized videos at scale with Tavus\' AI-powered video platform.',
    genre: ['AI', 'Video'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: '/src/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
    backdrop: '/src/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1234
  },
  {
    id: 'tavus-2',
    title: 'Personalized Marketing',
    description: 'Transform your marketing with AI-generated personalized video content.',
    genre: ['Marketing', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/src/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    backdrop: '/src/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 956
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: boltMovies
  },
  {
    id: 'expo', 
    title: 'Expo',
    movies: expoMovies
  },
  {
    id: 'revenuecat',
    title: 'RevenueCat', 
    movies: revenueCatMovies
  },
  {
    id: 'tavus',
    title: 'Tavus',
    movies: tavusMovies
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically with most liked movies
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};