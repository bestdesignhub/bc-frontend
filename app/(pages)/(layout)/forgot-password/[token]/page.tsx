import { ForgotPassword } from '@/components';

// interface IForgotPasswordPageProps {
//   params: { token: string };
// }

export default function ForgotPasswordPage({ params }: any) {
  const { token } = params; // Retrieve token from URL path

  return <ForgotPassword token={token} />;
}
