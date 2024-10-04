// import { supabase } from '../services/supabase';

// export const signUp = async (req : Request, res : Response) => {
//   const { email, password } = req.body;
//   const { user, error } = await supabase.auth.signUp({ email, password });
  
//   if (error) {
//     return res.status(400).json({ error: error.message });
//   }
  
//   res.status(200).json({ user });
// };