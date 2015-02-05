var searchIndex = {};
searchIndex['rust-readelf'] = {"items":[],"paths":[]};
searchIndex['elf'] = {"items":[[0,"","elf",""],[3,"File","",""],[12,"ehdr","","",0],[12,"phdrs","","",0],[12,"sections","","",0],[3,"Section","",""],[12,"shdr","","",1],[12,"data","","",1],[4,"ParseError","",""],[13,"IoError","","",2],[13,"InvalidMagic","","",2],[13,"InvalidFormat","","",2],[13,"NotImplemented","","",2],[0,"types","",""],[3,"Class","elf::types","Represents the ELF file class (32-bit vs 64-bit)"],[3,"Data","","Represents the ELF file data format (little-endian vs big-endian)"],[3,"Version","","Represents the ELF file version"],[3,"OSABI","","Represents the ELF file OS ABI"],[3,"Type","","Represents the ELF file type (object, executable, shared lib, core)"],[3,"Machine","","Represents the ELF file machine architecture"],[3,"FileHeader","","Encapsulates the contents of the ELF File Header"],[12,"class","","32-bit vs 64-bit",3],[12,"data","","little vs big endian",3],[12,"version","","elf version",3],[12,"osabi","","OS ABI",3],[12,"abiversion","","Version of the OS ABI",3],[12,"elftype","","ELF file type",3],[12,"machine","","Target machine architecture",3],[12,"entry","","Virtual address of program entry point",3],[3,"ProgFlag","","Represents ELF Program Header flags"],[3,"ProgType","","Represents ELF Program Header type"],[3,"ProgramHeader","","Encapsulates the contents of an ELF Program Header"],[12,"progtype","","Program segment type",4],[12,"offset","","Offset into the ELF file where this segment begins",4],[12,"vaddr","","Virtual adress where this segment should be loaded",4],[12,"paddr","","Physical address where this segment should be loaded",4],[12,"filesz","","Size of this segment in the file",4],[12,"memsz","","Size of this segment in memory",4],[12,"flags","","Flags for this segment",4],[12,"align","","file and memory alignment",4],[3,"SectionType","","Represens ELF Section type"],[3,"SectionFlag","","\nWrapper type for SectionFlag\n"],[3,"SectionHeader","","Encapsulates the contents of an ELF Section Header"],[12,"name","","Section Name",5],[12,"shtype","","Section Type",5],[12,"flags","","Section Flags",5],[12,"addr","","in-memory address where this section is loaded",5],[12,"offset","","Byte-offset into the file where this section starts",5],[12,"size","","Section size in bytes",5],[12,"link","","Defined by section type",5],[12,"info","","Defined by section type",5],[12,"addralign","","address alignment",5],[12,"entsize","","size of an entry if section data is an array of entries",5],[17,"EI_NIDENT","","Length of ELF file header platform-independent identification fields"],[17,"ELFMAG0","","ELF magic number byte 1"],[17,"ELFMAG1","","ELF magic number byte 2"],[17,"ELFMAG2","","ELF magic number byte 3"],[17,"ELFMAG3","","ELF magic number byte 4"],[17,"EI_CLASS","","Location of ELF class field in ELF file header ident array"],[17,"EI_DATA","","Location of data format field in ELF file header ident array"],[17,"EI_VERSION","","Location of ELF version field in ELF file header ident array"],[17,"EI_OSABI","","Location of OS ABI field in ELF file header ident array"],[17,"EI_ABIVERSION","","Location of ABI version field in ELF file header ident array"],[17,"ELFCLASSNONE","","Invalid ELF file class"],[17,"ELFCLASS32","","32-bit ELF file"],[17,"ELFCLASS64","","64-bit ELF file"],[17,"ELFDATANONE","","Invalid ELF data format"],[17,"ELFDATA2LSB","","little-endian ELF file"],[17,"ELFDATA2MSB","","big-endian ELF file"],[17,"EV_NONE","","Invalid version"],[17,"EV_CURRENT","","Current version"],[17,"ELFOSABI_NONE","","Defaults to Unix System V"],[17,"ELFOSABI_SYSV","","Unix System V"],[17,"ELFOSABI_HPUX","","HP-UX"],[17,"ELFOSABI_NETBSD","","NetBSD"],[17,"ELFOSABI_LINUX","","Linux with GNU extensions"],[17,"ELFOSABI_SOLARIS","","Solaris"],[17,"ELFOSABI_AIX","","AIX"],[17,"ELFOSABI_IRIX","","SGI Irix"],[17,"ELFOSABI_FREEBSD","","FreeBSD"],[17,"ELFOSABI_TRU64","","Compaq TRU64 UNIX"],[17,"ELFOSABI_MODESTO","","Novell Modesto"],[17,"ELFOSABI_OPENBSD","","OpenBSD"],[17,"ET_NONE","","No file type"],[17,"ET_REL","","Relocatable object file"],[17,"ET_EXEC","","Executable file"],[17,"ET_DYN","","Shared library"],[17,"ET_CORE","","Core file"],[17,"EM_NONE","",""],[17,"EM_M32","",""],[17,"EM_SPARC","",""],[17,"EM_386","",""],[17,"EM_68K","",""],[17,"EM_88K","",""],[17,"EM_860","",""],[17,"EM_MIPS","",""],[17,"EM_S370","",""],[17,"EM_MIPS_RS3_LE","",""],[17,"EM_PARISC","",""],[17,"EM_VPP500","",""],[17,"EM_SPARC32PLUS","",""],[17,"EM_960","",""],[17,"EM_PPC","",""],[17,"EM_PPC64","",""],[17,"EM_S390","",""],[17,"EM_V800","",""],[17,"EM_FR20","",""],[17,"EM_RH32","",""],[17,"EM_RCE","",""],[17,"EM_ARM","",""],[17,"EM_FAKE_ALPHA","",""],[17,"EM_SH","",""],[17,"EM_SPARCV9","",""],[17,"EM_TRICORE","",""],[17,"EM_ARC","",""],[17,"EM_H8_300","",""],[17,"EM_H8_300H","",""],[17,"EM_H8S","",""],[17,"EM_H8_500","",""],[17,"EM_IA_64","",""],[17,"EM_MIPS_X","",""],[17,"EM_COLDFIRE","",""],[17,"EM_68HC12","",""],[17,"EM_MMA","",""],[17,"EM_PCP","",""],[17,"EM_NCPU","",""],[17,"EM_NDR1","",""],[17,"EM_STARCORE","",""],[17,"EM_ME16","",""],[17,"EM_ST100","",""],[17,"EM_TINYJ","",""],[17,"EM_X86_64","",""],[17,"EM_PDSP","",""],[17,"EM_FX66","",""],[17,"EM_ST9PLUS","",""],[17,"EM_ST7","",""],[17,"EM_68HC16","",""],[17,"EM_68HC11","",""],[17,"EM_68HC08","",""],[17,"EM_68HC05","",""],[17,"EM_SVX","",""],[17,"EM_ST19","",""],[17,"EM_VAX","",""],[17,"EM_CRIS","",""],[17,"EM_JAVELIN","",""],[17,"EM_FIREPATH","",""],[17,"EM_ZSP","",""],[17,"EM_MMIX","",""],[17,"EM_HUANY","",""],[17,"EM_PRISM","",""],[17,"EM_AVR","",""],[17,"EM_FR30","",""],[17,"EM_D10V","",""],[17,"EM_D30V","",""],[17,"EM_V850","",""],[17,"EM_M32R","",""],[17,"EM_MN10300","",""],[17,"EM_MN10200","",""],[17,"EM_PJ","",""],[17,"EM_OPENRISC","",""],[17,"EM_ARC_A5","",""],[17,"EM_XTENSA","",""],[17,"EM_AARCH64","",""],[17,"EM_TILEPRO","",""],[17,"EM_MICROBLAZE","",""],[17,"EM_TILEGX","",""],[17,"PF_NONE","",""],[17,"PF_X","","Executable program segment"],[17,"PF_W","","Writable program segment"],[17,"PF_R","","Readable program segment"],[17,"PT_NULL","","Program header table entry unused"],[17,"PT_LOAD","","Loadable program segment"],[17,"PT_DYNAMIC","","Dynamic linking information"],[17,"PT_INTERP","","Program interpreter"],[17,"PT_NOTE","","Auxiliary information"],[17,"PT_SHLIB","","Unused"],[17,"PT_PHDR","","The program header table"],[17,"PT_TLS","","Thread-local storage segment"],[17,"PT_GNU_EH_FRAME","","GCC .eh_frame_hdr segment"],[17,"PT_GNU_STACK","","Indicates stack executability"],[17,"PT_GNU_RELRO","","Read-only after relocation"],[17,"SHT_NULL","","Inactive section with undefined values"],[17,"SHT_PROGBITS","","Information defined by the program, includes executable code and data"],[17,"SHT_SYMTAB","","Section data contains a symbol table"],[17,"SHT_STRTAB","","Section data contains a string table"],[17,"SHT_RELA","","Section data contains relocation entries with explicit addends"],[17,"SHT_HASH","","Section data contains a symbol hash table. Must be present for dynamic linking"],[17,"SHT_DYNAMIC","","Section data contains information for dynamic linking"],[17,"SHT_NOTE","","Section data contains information that marks the file in some way"],[17,"SHT_NOBITS","","Section data occupies no space in the file but otherwise resembles SHT_PROGBITS"],[17,"SHT_REL","","Section data contains relocation entries without explicit addends"],[17,"SHT_SHLIB","","Section is reserved but has unspecified semantics"],[17,"SHT_DYNSYM","","Section data contains a minimal set of dynamic linking symbols"],[17,"SHT_INIT_ARRAY","","Section data contains an array of constructors"],[17,"SHT_FINI_ARRAY","","Section data contains an array of destructors"],[17,"SHT_PREINIT_ARRAY","","Section data contains an array of pre-constructors"],[17,"SHT_GROUP","","Section group"],[17,"SHT_SYMTAB_SHNDX","","Extended symbol table section index"],[17,"SHT_NUM","","Number of reserved SHT_* values"],[17,"SHT_GNU_ATTRIBUTES","","Object attributes"],[17,"SHT_GNU_HASH","","GNU-style hash section"],[17,"SHT_GNU_LIBLIST","","Pre-link library list"],[17,"SHT_GNU_VERDEF","","Version definition section"],[17,"SHT_GNU_VERNEED","","Version needs section"],[17,"SHT_GNU_VERSYM","","Version symbol table"],[17,"SHF_NONE","","Empty flags"],[17,"SHF_WRITE","","Writable"],[17,"SHF_ALLOC","","Occupies memory during execution"],[17,"SHF_EXECINSTR","","Executable"],[17,"SHF_MERGE","","Might be merged"],[17,"SHF_STRINGS","","Contains nul-terminated strings"],[17,"SHF_INFO_LINK","","`sh_info' contains SHT index"],[17,"SHF_LINK_ORDER","","Preserve order after combining"],[17,"SHF_OS_NONCONFORMING","","Non-standard OS specific handling required"],[17,"SHF_GROUP","","Section is member of a group"],[17,"SHF_TLS","","Section hold thread-local data"],[11,"eq","","",6],[11,"ne","","",6],[11,"fmt","","",6],[11,"fmt","","",6],[11,"eq","","",7],[11,"ne","","",7],[11,"fmt","","",7],[11,"fmt","","",7],[11,"fmt","","",8],[11,"fmt","","",8],[11,"fmt","","",9],[11,"fmt","","",9],[11,"fmt","","",10],[11,"fmt","","",10],[11,"fmt","","",11],[11,"fmt","","",11],[11,"fmt","","",3],[11,"default","","",3],[11,"fmt","","",3],[11,"eq","","",12],[11,"ne","","",12],[11,"fmt","","",12],[11,"fmt","","",12],[11,"eq","","",13],[11,"ne","","",13],[11,"fmt","","",13],[11,"fmt","","",13],[11,"fmt","","",4],[11,"fmt","","",4],[11,"eq","","",14],[11,"ne","","",14],[11,"fmt","","",14],[11,"fmt","","",14],[11,"eq","","",15],[11,"ne","","",15],[11,"fmt","","",15],[11,"fmt","","",15],[11,"fmt","","",5],[11,"fmt","","",5],[0,"utils","elf",""],[5,"get_string","elf::utils",""],[11,"fmt","elf","",0],[11,"fmt","","",0],[11,"fmt","","",2],[11,"from_error","","",2],[11,"from_error","","",2],[11,"open","","",0],[11,"get_section","","",0],[11,"new","","",0],[11,"fmt","","",1],[11,"fmt","","",1],[14,"read_u8!","",""],[14,"read_u16!","",""],[14,"read_u32!","",""],[14,"read_u64!","",""]],"paths":[[3,"File"],[3,"Section"],[4,"ParseError"],[3,"FileHeader"],[3,"ProgramHeader"],[3,"SectionHeader"],[3,"Class"],[3,"Data"],[3,"Version"],[3,"OSABI"],[3,"Type"],[3,"Machine"],[3,"ProgFlag"],[3,"ProgType"],[3,"SectionType"],[3,"SectionFlag"]]};

initSearch(searchIndex);
