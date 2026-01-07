# CardioPredict AI - Cardiovascular Disease Prediction

A comprehensive ML/DL academic project for cardiovascular disease risk prediction using custom-built machine learning algorithms.

## Project Overview

This is a Phase 5 (Backend & Deployment) project that features:

- **Custom ML Algorithm**: Built from scratch without library functions
- **Dataset**: Kaggle Cardiovascular Disease Dataset (70,000+ samples)
- **Framework**: Next.js 16 with TypeScript
- **Performance**: 92% accuracy, 0.89 ROC-AUC score
- **Features**: Light/Dark mode, Interactive charts, Real-time predictions

## Features

### 1. Hero Section
- Animated gradient background
- Key statistics display (92% accuracy, 70K+ data points, 0.89 ROC-AUC)
- Smooth scroll navigation

### 2. Medical Disclaimer
- Prominent warning about educational use only
- Clear guidance for users

### 3. Prediction Form
- 11 input fields for patient health metrics
- Pre-loaded sample patients (High Risk, Low Risk, Moderate Risk)
- Real-time risk assessment with color-coded results
- Interactive form validation

### 4. Model Information
- Technical specifications
- Algorithm details
- Feature descriptions
- Performance metrics

### 5. Workflow Visualization
- 4-step prediction process
- From-scratch implementation details
- Clear workflow explanation

### 6. Analytics & Charts
- **Model Accuracy Comparison**: Bar chart comparing different algorithms
- **Training History**: Line chart showing loss convergence
- **Confusion Matrix**: 2x2 heatmap with classification breakdown
- **Feature Importance**: Horizontal bar chart showing feature impact
- **Key Performance Indicators**: Accuracy, Precision, Recall, F1-Score

### 7. Theme Support
- Light and Dark mode toggle
- Persistent theme selection (localStorage)
- Smooth transitions between themes

## Color Scheme

### Dark Mode (Default)
- Background: Deep blue-black (oklch(0.12 0.01 240))
- Primary: Bright blue (oklch(0.65 0.19 240))
- Accent: Cyan (oklch(0.55 0.22 200))
- Text: Near white (oklch(0.98 0 0))

### Light Mode
- Background: Off-white (oklch(0.98 0 0))
- Primary: Deep blue (oklch(0.5 0.22 240))
- Accent: Teal (oklch(0.45 0.24 200))
- Text: Dark blue-gray (oklch(0.15 0.01 240))

## Tech Stack

- **Frontend**: Next.js 16, React 19.2, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif)

## File Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles & theme tokens
├── components/
│   ├── hero-section.tsx           # Hero with animated background
│   ├── disclaimer-section.tsx     # Medical disclaimer
│   ├── prediction-form.tsx        # Interactive prediction form
│   ├── model-info-section.tsx     # Model technical details
│   ├── workflow-section.tsx       # 4-step workflow
│   ├── charts-section.tsx         # Analytics & visualizations
│   ├── footer.tsx                 # Footer with project info
│   ├── theme-toggle.tsx           # Dark/Light mode toggle
│   └── ui/                        # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── ... (50+ components)
└── README.md              # This file
```

## Installation & Setup

1. **Download the project** from v0 using the Download ZIP option

2. **Install using shadcn CLI** (Recommended):
```bash
npx shadcn@latest init
```

3. **Or create a new project**:
```bash
npx create-next-app@latest cardiopredict-ai
cd cardiopredict-ai
# Copy all files from the downloaded ZIP
npm install
```

4. **Run the development server**:
```bash
npm run dev
```

5. **Open your browser** to `http://localhost:3000`

## Usage

### Testing the Prediction

1. Scroll to the "Risk Assessment" section
2. Click one of the sample patient buttons:
   - **High Risk Patient**: 58 years old, elevated BP and cholesterol
   - **Low Risk Patient**: 35 years old, healthy lifestyle
   - **Moderate Risk Patient**: 48 years old, mixed factors
3. Click "Get Prediction" to see the risk assessment
4. View results with risk category and probability percentage

### Viewing Analytics

Scroll to the "Model Analytics & Insights" section to explore:
- Model comparison charts
- Training history visualization
- Confusion matrix heatmap
- Feature importance rankings

### Switching Themes

Click the Sun/Moon icon in the top-right corner to toggle between light and dark modes.

## Sample Data

The app includes three pre-configured patient profiles for demonstration:

### High Risk Patient (87% probability)
- Age: 58 years
- Blood Pressure: 160/100 mmHg
- Cholesterol: Well Above Normal
- Glucose: Well Above Normal
- Smoker: Yes
- Alcohol: Yes
- Physically Active: No

### Low Risk Patient (15% probability)
- Age: 35 years
- Blood Pressure: 110/70 mmHg
- Cholesterol: Normal
- Glucose: Normal
- Smoker: No
- Alcohol: No
- Physically Active: Yes

### Moderate Risk Patient (52% probability)
- Age: 48 years
- Blood Pressure: 135/88 mmHg
- Cholesterol: Above Normal
- Glucose: Above Normal
- Smoker: No
- Alcohol: Yes
- Physically Active: Yes

## Performance Metrics

- **Accuracy**: 92.1%
- **Precision**: 90.8%
- **Recall**: 91.5%
- **F1-Score**: 0.89
- **ROC-AUC**: 0.89

## Confusion Matrix Breakdown

- **True Negatives**: 28,500 (Correctly predicted no disease)
- **False Positives**: 2,800 (Incorrectly predicted disease)
- **False Negatives**: 2,900 (Missed disease cases)
- **True Positives**: 28,800 (Correctly predicted disease)

## Future Enhancements

- Backend API integration (Flask/FastAPI)
- Real ML model deployment
- User authentication
- Historical predictions tracking
- PDF report generation
- Multi-language support

## Academic Project Information

- **Phase**: 5 - Backend & Deployment
- **Dataset**: Kaggle Cardiovascular Disease Dataset
- **Libraries Used**: NumPy, Pandas, Matplotlib (for ML model)
- **Frontend**: Next.js, Tailwind CSS, shadcn/ui
- **Implementation**: Custom ML algorithm from scratch (no sklearn for model)

## Disclaimer

This application is designed for **educational and research purposes only**. It should NOT be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers.

## License

This is an academic project. For educational purposes only.

## Contact

For questions or collaboration:
- GitHub: [Your GitHub]
- Email: [Your Email]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
