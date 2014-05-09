class IpsumText

def initialize(params)
  @rapper = Rapper.find(params[:id])
  @paragraphs = params[:paras].to_i
  @sentences = params[:sentences].to_i

end

def get_ipsum
  generate_paragraphs(@paragraphs)
end

def generate_paragraphs(number_of_paras)
  @lines = @rapper.lines
  all_paras = []
  number_of_paras.to_i.times do
    all_paras << make_paragraph
  end
  all_paras.to_json
end

def add_period(line)
  unless /(\W)$/.match(line)
    line += "."
  end
end

def make_paragraph
  this_para = []
  @sentences.times do
    this_para << add_period(@lines.sample.content)
  end
  this_para.join(" ")
end

end