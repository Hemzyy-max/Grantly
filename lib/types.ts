export type Stage = "Not Started" | "Interested" | "Preparing" | "Submitted" | "Under Review" | "Approved" | "Rejected";
export type Scholarship = { id: string; title: string; provider: string; amount: string; funding: string; location: string; category: string; closingDate: string; description: string; eligibility: string[]; documents: string[]; verified: boolean; url: string; match: number };
export type Application = { id: string; scholarshipId: string; stage: Stage; updatedAt: string; checklist: { label: string; done: boolean }[] };
