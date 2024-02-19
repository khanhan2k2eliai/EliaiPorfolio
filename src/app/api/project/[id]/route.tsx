import { type NextRequest, type NextResponse } from "next/server";
import supabase from "@/utils/supabase";
import { handleApiError } from "@/utils/axios";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    if (!id) {
      throw new Error("No project ID");
    }
    const projectRes = await supabase
      .from("Projects")
      .select(
        "*,ProjectSections(name,description,ProjectSectionImages(Images(image_url)))"
      )
      .eq("id", id)
      .single();
    const result=  projectRes.data.ProjectSections.map((section:any) =>{
        const sectionImages = section.ProjectSectionImages.map((image:any) => image.Images.image_url);
        return {...section,ProjectSectionImages: sectionImages}
      })
    return Response.json({ ...projectRes.data,ProjectSections:result }, { status: 200 });
  } catch (e: any) {
    const { status, message } = handleApiError(e);
    return Response.json({ message }, { status: status });
  }
}
