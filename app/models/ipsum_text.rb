class IpsumText

def initialize(rapper)
  @rapper = rapper
end

def generate_paragraphs(number_of_paras)
  @lines = @rapper.lines
  all_paras = []
  number_of_paras.to_i.times do
    all_paras << make_paragraph
  end
  all_paras
end

def add_period(line)
  unless /(\W)$/.match(line)
    line += "."
  end
end

def make_paragraph
  this_para = []
  15.times do
    this_para << add_period(@lines.sample.content)
  end
  this_para
end

end