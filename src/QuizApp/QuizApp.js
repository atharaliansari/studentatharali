export default function QuizApp (){
    return (
        <div>
            <div>
                <h1 className="text-center pt-10 font-bold text-5xl">Quiz App</h1>
                <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Question 1</h2>
                    <p className="mb-4">What is the capital of Pakistan</p>

                    <div className="mb-4">
                        <div>
                            <input type="radio" name="answer" className="mr-2" /> karachi
                        </div>
                        <div>
                            <input type="radio" name="answer" className="mr-2" /> Islamabad
                        </div>
                        <div>
                            <input type="radio" name="answer" className="mr-2" /> Lahore
                        </div>
                        <div>
                            <input type="radio" name="answer" className="mr-2" /> Peshawar
                        </div>
                    </div>

                    <button className="bg-blue-500 text-white p-3 rounded">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )

}