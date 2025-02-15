import { COOKIES, USER_ROUTES } from '@/constants';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    // Extract headers
    const headers = Object.fromEntries(request.headers.entries());
    const code = parseInt(headers['code'] || '0');
    const statusCode = headers['status-code'] || '';
    if (code === 401 && (statusCode === 'SESSION_EXPIRE' || statusCode === 'ACCOUNT_SUSPENDED')) {
      const cookieObj = await cookies();
      cookieObj.delete(COOKIES.user);
      cookieObj.delete(COOKIES.userToken);

      // Redirect to sign-in page
      return Response.redirect(USER_ROUTES.signin);
    }
    return Response.json({ status: 200, success: true });
  } catch (error: any) {
    // Handle other errors
    return Response.json(
      {
        message: 'An error occurred',
        error: error.response?.data || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
