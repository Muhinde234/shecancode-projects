import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: "Hello from the  API" },
  
  );
 

}

export async function POST(request: Request) {
  try {
    const data = await request.json();

   
    if (!data.name || typeof data.name !== 'string') {
      return NextResponse.json(
        { error: "Invalid input: 'name' is required and must be a string." }, 
        { status: 400 }
      );
    }

    
    return NextResponse.json({ message: `Hello, ${data.name}! Your data was received.` });
  } catch (error) {
   
    return NextResponse.json(
      { error: "Invalid JSON or server error." }, 
      { status: 400 }
    );
  }
}


export async function PUT() {
  return NextResponse.json({ message: "Hello from the PUT method" });
}

export async function DELETE() {
  return NextResponse.json({ message: "Hello from the DELETE method" });
}

