<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExamStageAddRequest;
use Illuminate\Http\Request;
use App\Models\Exam;

class ExamStageController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:sanctum');
    }

    public function add(ExamStageAddRequest $request)
    {
        $start_date = $request->date . ' ' . $request->start_time;
        $end_date = $request->date . ' ' . $request->end_time;
        Exam::create([
            'name' => $request->name,
            'description' => $request->description,
            'duration' => $request->duration,
            'date' => $request->date,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'type' => 1,
            'status' => 1
        ]);

        return response()->json([
            'message' => 'Exam stage added successfully.',
            'data' => $request->all()
        ]);
    }

    public function get()
    {
        $exams = Exam::where('type', 1)->orderBy('id', 'DESC')->get();
        return response()->json([
            'message' => 'Exam stages fetched successfully.',
            'data' => $exams
        ]);
    }
}
