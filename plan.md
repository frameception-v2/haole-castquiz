### Step 1: Implement Start Frame and Basic Routing  
```text
- Build: /start endpoint with initial frame  
  - Frame displays "Start Quiz" button  
  - Button POSTs to /question?q=1  
- Outcome: Start screen appears in frame viewer with working button that redirects to /question endpoint  
```

### Step 2: Create Question State Management  
```text
- Build: /question endpoint handling initial state  
  - Mock Farcaster API response with test data  
  - Generate Question 1 with hardcoded options  
  - Encode basic QuizState in URL param  
- Outcome: First question appears with 4 options, state parameter visible in network requests  
```

### Step 3: Integrate Farcaster Casts API  
```text
- Build: Cast fetching logic in /question endpoint  
  - Implement GET /v2/casts with Bearer token  
  - Extract text from 2 most recent casts  
  - Simple question generation (e.g., "What was mentioned in this cast?")  
- Outcome: Real user casts appear in questions, fallback to test data if API fails  
```

### Step 4: Implement Answer Processing  
```text
- Build: State decoding and score updating  
  - Parse incoming state parameter  
  - Validate answer against question.correctIndex  
  - Update score and question number in state  
- Outcome: Correct answers increase score, state persists through question flow  
```

### Step 5: Create Score Display Screen  
```text
- Build: /score endpoint with final results  
  - Display total correct answers  
  - Add "Play Again" button pointing to /start  
  - Encode reset state in button  
- Outcome: Final frame shows correct score, restarting quiz resets progress  
```

### Step 6: Add Error Handling Layer  
```text
- Build: State validation and error recovery  
  - Detect invalid/corrupted state  
  - Handle API failures with cached fallback questions  
  - Add retry button for cast fetch errors  
- Outcome: Invalid flows redirect to start, network errors show recovery options  
```

### Step 7: Implement State Compression  
```text
- Build: Optimized state encoding  
  - Compress QuizState with URL-safe encoding  
  - Add version field for state compatibility  
  - Validate state structure before processing  
- Outcome: State parameter remains under 256 bytes for frame compliance  
```

### Step 8: Add API Response Caching  
```text
- Build: Simple cast cache mechanism  
  - Store API responses for 5 minutes  
  - Cache per user ID  
  - Handle rate limit headers from API  
- Outcome: Repeated quizzes for same user don't hit API rate limits  
```

### Step 9: Finalize Question Generation  
```text
- Build: Enhanced question logic  
  - Extract keywords from casts using NLP  
  - Generate plausible distractor options  
  - Validate question uniqueness  
- Outcome: Questions vary meaningfully between different casts  
```