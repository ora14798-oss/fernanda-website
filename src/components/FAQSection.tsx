import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, TrendingUp, Shield, Smartphone, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: DollarSign,
    title: "Smart Budgeting",
    description: "AI-powered budgets that adapt to your spending habits and help you save more."
  },
  {
    icon: TrendingUp,
    title: "Investment Tracking", 
    description: "Monitor your portfolio performance with real-time analytics and insights."
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your financial data is protected with 256-bit encryption and biometric access."
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    description: "Manage your finances anywhere with our intuitive mobile-first interface."
  },
  {
    icon: Users,
    title: "Family Sharing",
    description: "Share budgets and track expenses with family members securely."
  },
  {
    icon: Check,
    title: "Goal Achievement",
    description: "Set financial goals and get personalized recommendations to reach them faster."
  }
];

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for personal finance management",
    features: ["Track up to 3 accounts", "Basic budgeting", "Expense categorization", "Monthly reports"]
  },
  {
    name: "Premium",
    price: "$9.99/mo",
    description: "Advanced tools for serious savers",
    features: ["Unlimited accounts", "AI-powered insights", "Investment tracking", "Goal setting", "Priority support"]
  },
  {
    name: "Family",
    price: "$19.99/mo", 
    description: "Complete solution for families",
    features: ["Everything in Premium", "Up to 6 family members", "Shared budgets", "Kids accounts", "Family goals"]
  }
];

const faqs = [
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level 256-bit encryption to protect your data. Your information is encrypted both in transit and at rest, and we never sell your data to third parties."
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "Yes! Premium and Family plans support unlimited bank account connections. The Basic plan allows up to 3 accounts."
  },
  {
    question: "How does the AI budgeting work?",
    answer: "Our AI analyzes your spending patterns, income, and financial goals to create personalized budget recommendations. It learns from your behavior and adjusts over time to help you save more effectively."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments or cancellation fees. You'll continue to have access until the end of your billing period."
  },
  {
    question: "Do you offer a free trial?",
    answer: "We offer a forever-free Basic plan that gives you access to core features. You can upgrade to Premium or Family plans anytime to unlock advanced features."
  },
  {
    question: "How does family sharing work?",
    answer: "With the Family plan, you can invite up to 6 family members. Each member gets their own secure login while sharing budgets, tracking joint expenses, and working toward family financial goals together."
  }
];

const FinanceAppLanding = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 w-full bg-[url('https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg')] bg-cover bg-no-repeat">
        <div className="w-full max-w-4xl mx-auto text-center">
          <Badge className="text-xs font-medium">Financial Freedom</Badge>
          <h1 className="mt-4 text-4xl font-semibold">
            Take Control of Your Financial Future
          </h1>
          <p className="mt-6 font-medium text-muted-foreground max-w-2xl mx-auto">
            Smart budgeting, investment tracking, and financial planning all in one powerful app. Join thousands who've transformed their money habits.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg" className="px-8">Get Started Free</Button>
            <Button variant="outline" size="lg" className="px-8">Watch Demo</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 w-full">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="text-xs font-medium">Features</Badge>
            <h2 className="mt-4 text-3xl font-semibold">
              Everything You Need for Financial Success
            </h2>
            <p className="mt-6 font-medium text-muted-foreground">
              Powerful tools designed to simplify your financial life and help you achieve your goals.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <feature.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 w-full bg-secondary/30">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="text-xs font-medium">Pricing</Badge>
            <h2 className="mt-4 text-3xl font-semibold">
              Choose the Perfect Plan for You
            </h2>
            <p className="mt-6 font-medium text-muted-foreground">
              Start free and upgrade as your financial needs grow. Cancel anytime.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold mb-1">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  {index === 0 ? "Get Started" : "Choose Plan"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 w-full">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join over 50,000 users who have taken control of their financial future with our app.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8">Start Your Journey</Button>
            <Button variant="outline" size="lg" className="px-8">Learn More</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 w-full">
        <div className="w-full max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="text-xs font-medium">FAQ</Badge>
            <h2 className="mt-4 text-3xl font-semibold">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 font-medium text-muted-foreground">
              Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export { FinanceAppLanding };
export const FaqSection = () => {
  return (
    <section className="py-24 w-full">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h2 className="mt-4 text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 font-medium text-muted-foreground">
            Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};