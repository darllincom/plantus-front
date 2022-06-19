export type KinshipContact = {
  id: string;
  phone: string;
  name: string;
  degree: string;
  healthId: string;
};

export type Health = {
  id: string;
  hasAllergy: boolean;
  allergyDescription: string | null;
  usesMedicates: boolean;
  medicatesDescription: string;
  bloodType: string;
  SUSNumber: string;
  SUSCard: string;
  vaccineCard: string;
  emergencyContacts: KinshipContact[];
};

