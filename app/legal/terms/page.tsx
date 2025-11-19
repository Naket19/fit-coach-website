import Link from 'next/link'

export const metadata = {
  title: 'Terms of Use - Fit Coach',
  description: 'Terms of Use for Fit Coach Application',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark">
      <div className="container-custom py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Use</h1>
        <p className="text-white/60 text-lg mb-12">
          <strong>Last updated: November 18, 2025</strong>
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-white/80 leading-relaxed">
            Please read these Terms of Use carefully before using Our Service.
          </p>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Interpretation and Definitions</h2>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">Interpretation</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-primary">Definitions</h3>
            <p className="text-white/80 mb-4">For the purposes of these Terms of Use:</p>
            <ul className="list-disc list-inside space-y-3 text-white/80 pl-4">
              <li><strong className="text-white">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong className="text-white">Application</strong> refers to Fit Coach, the mobile application provided by the Company.</li>
              <li><strong className="text-white">Company</strong> refers to the individual operator of Fit Coach, based in France.</li>
              <li><strong className="text-white">Content</strong> refers to content such as text, images, workout programs, exercises, or other information.</li>
              <li><strong className="text-white">Country</strong> refers to: France</li>
              <li><strong className="text-white">Device</strong> means any device that can access the Service.</li>
              <li><strong className="text-white">Service</strong> refers to the Application and Website.</li>
              <li><strong className="text-white">Subscription</strong> refers to the paid premium features of the Service.</li>
              <li><strong className="text-white">You</strong> means the individual accessing or using the Service.</li>
            </ul>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Acknowledgment</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              These are the Terms of Use governing the use of this Service and the agreement that operates between You and the Company.
            </p>
            <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 mb-4">
              <p className="text-white/90 font-semibold">
                By accessing or using the Service You agree to be bound by these Terms of Use. If You disagree with any part of these Terms of Use then You may not access the Service.
              </p>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              You represent that you are over the age of 13. The Company does not permit those under 13 to use the Service. If You are between 13 and 18 years old, You must have Your parent or legal guardian's permission to use the Service.
            </p>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">User Accounts</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              When You create an Account with Us, You must provide information that is accurate, complete, and current at all times.
            </p>
            <p className="text-white/80 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
              <li>Share Your Account credentials with any third party</li>
              <li>Allow any third party to access Your Account</li>
              <li>Use another user's Account without permission</li>
              <li>Create multiple Accounts for fraudulent purposes</li>
            </ul>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Subscriptions</h2>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">Subscription Plans</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              The Service offers premium Subscription plans on a <strong className="text-primary">monthly</strong> or <strong className="text-primary">annual</strong> basis.
            </p>
            <div className="bg-dark-light border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-white font-semibold mb-4">All Subscriptions include:</p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Unlimited access to AI coach chat</li>
                <li>Unlimited AI-generated workout programs</li>
                <li>Full access to workout history and statistics</li>
                <li>All premium features</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary">Free Trial</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              We offer a <strong className="text-primary">3-day free trial</strong> for new users. You will not be charged during the trial period. After the trial period ends, Your Subscription will automatically renew and You will be charged the applicable Subscription fee unless You cancel before the trial period ends.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-primary">Billing and Renewal</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 pl-4 mb-6">
              <li>Subscriptions are billed in advance on a recurring basis</li>
              <li>Your Subscription will automatically renew at the end of each billing period</li>
              <li>Payment is processed through Apple In-App Purchase</li>
              <li>You can manage Your Subscription in Your Apple Account Settings</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-primary">Cancellation</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              You may cancel Your Subscription at any time through Your Apple Account Settings. Cancellation will take effect at the end of the current billing period.
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
              <p className="text-white/90 font-semibold">
                We do not provide refunds for partial subscription periods. If You cancel Your Subscription, You will not receive a refund for the remaining days of Your current billing period.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary">Refunds</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              All payments are processed through Apple In-App Purchase. Refund requests must be submitted directly to Apple in accordance with Apple's refund policy.
            </p>
            <p className="text-white/80 leading-relaxed">
              To request a refund from Apple, go to{' '}
              <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline">
                reportaproblem.apple.com
              </a>
            </p>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">AI-Generated Content and Medical Disclaimer</h2>
            
            <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 text-white">⚠️ AI Coaching Limitations</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                The Service uses artificial intelligence to generate workout programs and provide fitness coaching advice.{' '}
                <strong className="text-primary">AI-generated content may contain errors, inaccuracies, or inappropriate recommendations.</strong>
              </p>
              <p className="text-white/80 mb-3">You acknowledge and agree that:</p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>AI-generated workout programs and advice are for informational purposes only</li>
                <li>The AI coach is not a substitute for professional medical advice</li>
                <li>You should always consult with a qualified healthcare professional</li>
                <li>You use AI-generated content at Your own risk</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary">Not a Medical Device</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              <strong className="text-white">Fit Coach is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease.</strong>
            </p>

            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-red-400">⚠️ IMPORTANT HEALTH DISCLAIMER</h3>
              <p className="text-white/90 mb-3">Exercise involves inherent risks of injury. You should consult a physician before beginning any exercise program, especially if You:</p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Have any pre-existing medical conditions</li>
                <li>Are pregnant or nursing</li>
                <li>Have a history of heart disease or cardiovascular conditions</li>
                <li>Have any physical limitations or injuries</li>
                <li>Are taking any medications</li>
                <li>Have not exercised regularly in the past</li>
              </ul>
              <p className="text-white/90 font-semibold mt-4">
                By using the Service, You acknowledge that You are physically capable of performing the exercises and assume all risks associated with Your use of the Service.
              </p>
            </div>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Acceptable Use</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms.
            </p>
            <p className="text-white/80 mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
              <li>Use the Service in any way that violates any applicable law</li>
              <li>Exploit, harm, or attempt to exploit or harm minors</li>
              <li>Impersonate the Company or another user</li>
              <li>Attempt to reverse engineer or decompile the Application</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt to gain unauthorized access to the Service</li>
            </ul>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Intellectual Property</h2>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">Company Content</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The Service and its original content, features, and functionality are and will remain the exclusive property of the Company. You may not copy, modify, distribute, sell, or lease any part of Our Service.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-primary">Your Content and Data</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              You retain all rights to Your personal fitness data and workout history. By using the Service, You grant the Company a license to use Your data in an <strong className="text-primary">anonymized and aggregated form</strong> for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
              <li>Improving the AI coaching algorithms</li>
              <li>Analyzing usage trends</li>
              <li>Enhancing the Service quality</li>
            </ul>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Third-Party Services</h2>
            <p className="text-white/80 mb-4">The Service uses third-party services:</p>
            <div className="grid gap-3">
              <div className="bg-dark-light rounded-xl p-4 border border-white/10">
                <span className="text-white font-semibold">Supabase</span>
                <span className="text-white/60 text-sm"> - Authentication and data storage</span>
              </div>
              <div className="bg-dark-light rounded-xl p-4 border border-white/10">
                <span className="text-white font-semibold">OpenAI</span>
                <span className="text-white/60 text-sm"> - AI coaching and workout generation</span>
              </div>
              <div className="bg-dark-light rounded-xl p-4 border border-white/10">
                <span className="text-white font-semibold">Apple In-App Purchase</span>
                <span className="text-white/60 text-sm"> - Payment processing</span>
              </div>
            </div>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Termination</h2>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">Termination by You</h3>
            <p className="text-white/80 mb-4">You may delete Your Account at any time by:</p>
            <ol className="list-decimal list-inside space-y-2 text-white/80 pl-4 mb-6">
              <li>Opening the Application</li>
              <li>Going to Settings (Paramètres)</li>
              <li>Selecting "Delete Account" (Supprimer mon compte)</li>
            </ol>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
              <p className="text-white/90 font-semibold mb-3">Important:</p>
              <p className="text-white/80">
                Deleting Your Account in the Application does NOT automatically cancel Your Subscription with Apple. You remain responsible for managing and cancelling Your Subscription through Your Apple Account Settings.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary">To Cancel Your Subscription with Apple:</h3>
            <ol className="list-decimal list-inside space-y-2 text-white/80 pl-4">
              <li>Open Settings on Your iOS device</li>
              <li>Tap Your name at the top</li>
              <li>Tap "Subscriptions"</li>
              <li>Select "Fit Coach"</li>
              <li>Tap "Cancel Subscription"</li>
            </ol>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Limitation of Liability</h2>
            <div className="bg-dark-light border border-white/10 rounded-xl p-6">
              <p className="text-white/90 font-semibold mb-4">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
              <p className="text-white/80 leading-relaxed mb-4">
                IN NO EVENT SHALL THE COMPANY BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Any special, incidental, indirect, or consequential damages</li>
                <li>Any physical injuries or health issues resulting from Your use of the Service</li>
                <li>Any damages resulting from AI-generated content or advice</li>
                <li>Third-party software and/or hardware used with the Service</li>
              </ul>
            </div>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The Service is provided to You <strong className="text-primary">"AS IS"</strong> and <strong className="text-primary">"AS AVAILABLE"</strong> with all faults and defects without warranty of any kind.
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <p className="text-white/90 font-semibold">
                YOU ACKNOWLEDGE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
              </p>
            </div>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Governing Law</h2>
            <p className="text-white/80 leading-relaxed">
              The laws of <strong className="text-white">France</strong>, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.
            </p>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Changes to These Terms of Use</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, We will provide at least <strong className="text-primary">30 days' notice</strong> prior to any new terms taking effect.
            </p>
            <p className="text-white/80 leading-relaxed">
              By continuing to access or use Our Service after revisions become effective, You agree to be bound by the revised terms.
            </p>
          </section>

          <section className="pt-6 pb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              If you have any questions about these Terms of Use, You can contact us:
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <p className="text-white font-semibold">
                By email:{' '}
                <a href="mailto:contact@fit-coach.com" className="text-primary hover:text-primary-light underline">
                  contact@fit-coach.com
                </a>
              </p>
            </div>
            <p className="text-white/60 text-center mt-8">
              <strong>Fit Coach</strong> © 2025 All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

