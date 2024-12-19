import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/demo', '/profile'];  

const isAuthenticated = async (req: NextRequest): Promise<boolean> => {  
    // Implement your authentication check here.   
    // For example: Check token validity  
    return !!req.cookies.get('token'); // Placeholder, implement tokenIsValid  
};  

export async function middleware(req: NextRequest) {  
    const { pathname } = req.nextUrl;  

    if (pathname.includes('/api/') || pathname === '/login' || pathname === '/') {  
        return NextResponse.next();  
    }  

    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));  

    if (isProtectedRoute) {  
        const auth = await isAuthenticated(req); 
         
        if (!auth) {  
            const url = req.nextUrl.clone();  
            url.pathname = '/login';  
            return NextResponse.redirect(url);  
        }  
    }

    return NextResponse.next();  
};

export const config = {
    matcher: [
        '/demo/:path*',
    ]
}; 