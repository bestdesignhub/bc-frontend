import { Header, Footer } from '@/app/components';
import { ResetPassword } from '@/app/components/reset-password';
import BannerWrapper from '@/components/common/banner/BannerWrapper';
export default function ForgotPasswordPage() {
  return (
    <BannerWrapper>
      <Header />
      <ResetPassword />
      {/* <KeepConnect /> */}
      <Footer />
    </BannerWrapper>
  );
}
